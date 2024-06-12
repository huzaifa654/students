/* eslint-disable prettier/prettier */
import { ActivityIndicator, Alert, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { EmailIcon, GPA, KuLogo, LockIcon, UserIcon, semester } from '../../Constants/AppImages'
import { scale, verticalScale } from 'react-native-size-matters'
import CustomInput from '../../Components/CustomInput/CustomInput'
import { useNavigation } from '@react-navigation/native'
import Colors from '../../Utilitis/Colors'
import TextLabel from '../../Components/TextLabel/TextLable'
import { FontFamily, FontSizes } from '../../Constants/AppFonts'
import CustomButton from '../../Components/CustomButton/CustomButton'
import CustomDropDown from '../../Components/CustomDropDown/CustomDropDown'
import axios from 'axios'
import { Url } from '../../Constants/AppText'
import { useDispatch, useSelector } from 'react-redux'
import { setUserdetails } from '../../../Store/Reducer/UserReducer'
import { Controller, useForm } from 'react-hook-form'
import ErrorMessage from '../../Components/ErrorMessage/ErrorMessage'
import Loader from '../../Components/Loader/Loader'
import CustomModal from '../../Components/Modals/CustomModal'
import SuccessModal from '../../Components/SuccessModal/SuccessModal'

export default function Signup() {
    const navigation = useNavigation();


    const [textSecurity, SetTextSecurity] = useState(true);
    const [textSecurity2, SetTextSecurity2] = useState(true);
    const [value, setValue] = useState('');
    const [load, setLoad] = useState(false)
    const dispatch = useDispatch();
    const {
        userDetails
    } = useSelector(state => state.UserDetails);

    const citiesdata = [

        { label: 'MERN', value: 'MERN' },
        { label: 'Cloud Computing', value: 'Cloud Computing' },
        { label: 'Flutter', value: 'Flutter' },
        { label: 'Web Development', value: 'Web Development' },



    ];


    const handleSignup = (firstName, LastName, seatNo, Semester, SemesterGpa, Gpa, skilledCourses, email, password) => {
        setLoad(true)
        const UserData = {
            firstName: firstName,
            lastName: LastName,
            seatNo: seatNo,
            semester: Semester,
            semesterGPA: SemesterGpa,
            overAllGPA: Gpa,
            skilledCourses: skilledCourses,
            email: email,
            password: password,
        }
        console.log(UserData)
        axios.post(`${Url?.BaseUrl}/register`, UserData)
            .then(response => {

                setLoad(false)
                dispatch(setUserdetails(response?.data))
                console.log('User registered successfully:', response.data.message);
                Alert.alert('Success', response.data.message, [

                    { text: 'OK', onPress: () => navigation.goBack() },
                ]);



            })
            .catch(error => {
                console.log(error)
                // console.error('Failed to register user:', error);
                setLoad(false)
                Alert.alert('Error', 'Failed to register user');
            });
    };







    const {
        control,
        handleSubmit,
        formState: { errors },
        register,
        reset,
        watch
    } = useForm({
        mode: 'all',
    });
    const password = useRef({});
    password.current = watch("Password", "");

    const onSubmit = data => {
        handleSignup(data?.firstName, data?.lastName, data?.seatNo, data?.semester, data?.semesterGpa, data?.overallGpa, data?.dropdown, data?.email, data?.Password)
        console.log("data--", data?.Password)
    };

    return (

        <View style={styles.container}>
            <ScrollView >
                <Image source={KuLogo} resizeMode="contain" style={styles.img} />
                <TextLabel label={'Welcome!'} fontSize={FontSizes.Large} fontFamily={FontFamily.Arsenal_Bold} fontWeight={"bold"} marginTop={25} marginLeft={22} />
                <TextLabel label={'Please sign up to continue'} fontSize={FontSizes.LargeMedium} fontFamily={FontFamily.Arsenal_Bold} marginBottom={25} marginLeft={22} />

                <CustomInput
                    placeholder="First Name"
                    name={"firstName"}
                    control={control}
                    type={'ICON'}
                    width={'90%'}
                    icon={UserIcon}
                    color={Colors.black}
                    placeholderTextColor={Colors.AppBlue1}
                    rules={{
                        required: 'First Name is required',

                    }}
                />
                {errors?.firstName &&
                    <ErrorMessage error={errors?.firstName?.message} />
                }
                <CustomInput
                    placeholder="Last Name"
                    name={"lastName"}
                    control={control}
                    type={'ICON'}
                    width={'90%'}
                    icon={UserIcon}
                    color={Colors.black}
                    placeholderTextColor={Colors.AppBlue1}
                    rules={{
                        required: 'Last Name is required',

                    }}
                />
                {errors?.lastName &&
                    <ErrorMessage error={errors?.lastName?.message} />
                }
                <CustomInput
                    placeholder="Seat No"
                    name={"seatNo"}
                    control={control}
                    type={'ICON'}
                    width={'90%'}
                    maxLength={10}
                    icon={UserIcon}
                    color={Colors.black}
                    placeholderTextColor={Colors.AppBlue1}
                    rules={{
                        required: 'Seat No is required',

                    }}

                />
                {errors?.seatNo &&
                    <ErrorMessage error={errors?.seatNo?.message} />
                }

                <CustomInput
                    placeholder="Semester"
                    name={"semester"}
                    control={control}
                    type={'ICON'}
                    width={'90%'}
                    icon={semester}
                    keybord={"numeric"}
                    maxLength={1}
                    color={Colors.black}
                    placeholderTextColor={Colors.AppBlue1}
                    rules={{
                        required: 'Semester No is required',

                    }}
                />
                {errors?.semester &&
                    <ErrorMessage error={errors?.semester?.message} />
                }
                <CustomInput
                    placeholder="Semester GPA"
                    name={"semesterGpa"}
                    control={control}
                    keybord={"numeric"}
                    maxLength={4}
                    type={'ICON'}
                    width={'90%'}
                    icon={GPA}
                    color={Colors.black}
                    placeholderTextColor={Colors.AppBlue1}
                    rules={{
                        required: 'Semester GPA is required',
                        pattern: {
                            value: /^([0-3](\.\d{1,2})?|4(\.0{1,2})?)$/,
                            message: 'Enter a valid GPA',
                        },

                    }}
                />
                {errors?.semesterGpa &&
                    <ErrorMessage error={errors?.semesterGpa?.message} />
                }

                <CustomInput
                    placeholder="Overall GPA"
                    name={"overallGpa"}
                    control={control}
                    keybord={"numeric"}
                    maxLength={4}
                    type={'ICON'}
                    width={'90%'}
                    icon={GPA}
                    color={Colors.black}
                    placeholderTextColor={Colors.AppBlue1}
                    rules={{
                        required: 'Overall GPA is required',
                        pattern: {
                            value: /^([0-3](\.\d{1,2})?|4(\.0{1,2})?)$/,
                            message: 'Enter a valid GPA',
                        },

                    }}
                />
                {errors?.overallGpa &&
                    <ErrorMessage error={errors?.overallGpa?.message} />
                }
                <Controller
                    control={control}
                    name="dropdown"
                    rules={{ required: true, }}
                    render={({ field: { onChange, value } }) => (
                        <CustomDropDown
                            setValue={onChange}
                            value={value}
                            data={citiesdata} // Use your data array here
                            placeholder="Skilled Courses"
                            width={'90%'}
                            border={true}
                            defaultValue={'Skilled Courses'}
                            leftIcon={GPA}
                        />
                    )}
                />
                {errors?.dropdown &&
                    <ErrorMessage error={"Select any skilled course"} />
                }



                <CustomInput
                    placeholder="Email"
                    name="email"
                    control={control}
                    keybord={'email-address'}
                    type={'ICON'}
                    icon={EmailIcon}
                    tintColor={Colors.black}
                    width={"90%"}
                    color={Colors.black}
                    placeholderTextColor={Colors.AppBlue1}
                    rules={{
                        required: 'Email is required',
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: 'Enter a valid email',
                        },
                    }}
                />
                {errors?.email &&
                    <ErrorMessage error={errors?.email?.message} />
                }

                <CustomInput
                    color={Colors.black}
                    placeholderTextColor={Colors.AppBlue1}
                    placeholder="Password"
                    secureTextEntry={textSecurity}
                    secure={true}
                    name={"Password"}
                    control={control}
                    type={'ICON'}
                    icon={LockIcon}
                    width={'90%'}
                    SetsecureTextEntry={SetTextSecurity}
                    rules={{
                        required: 'Password is required',
                        pattern: {
                            value: /^.{4,}$/,
                            message: 'Your password must be at least 4 characters long',

                        },
                    }}
                />
                {errors?.Password &&
                    <ErrorMessage error={errors?.Password?.message} />
                }

                <CustomInput
                    color={Colors.black}
                    placeholderTextColor={Colors.AppBlue1}
                    placeholder="Confirm Password"
                    secureTextEntry={textSecurity2}
                    secure={true}
                    name={"confirmPassword"}
                    control={control}
                    type={'ICON'}
                    icon={LockIcon}
                    width={'90%'}
                    SetsecureTextEntry={SetTextSecurity2}
                    rules={{
                        required: 'Confirm password is required',
                        validate: value =>
                            value === password.current || "The passwords do not match"
                    }}
                />
                {errors?.confirmPassword &&
                    <ErrorMessage error={errors?.confirmPassword?.message} />
                }


                <CustomButton
                    text="Signup"
                    onPress={handleSubmit(onSubmit)}
                    bgColor={"#2596be"}
                    marginTop={30}
                    marginBottom={34}
                    fgColor={"white"}
                />

                <CustomModal setValue={setValue} value={value}>
                    <SuccessModal />
                </CustomModal>
            </ScrollView>
            {load && <Loader />}

        </View>
    )
}

const styles = StyleSheet.create({


    container: {
        flex: 1,
        backgroundColor: '#ecf3fe',
    },
    img: {
        width: scale(105),
        height: verticalScale(105),
        alignSelf: 'center',
        marginTop: verticalScale(35),
    },
})