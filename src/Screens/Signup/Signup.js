/* eslint-disable prettier/prettier */
import { Alert, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
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

export default function Signup() {
    const navigation = useNavigation();
    const [firstName, setfirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [SemesterGpa, setSemesterGpa] = useState('');
    const [Gpa, setGpa] = useState('');
    const [seatNo, setSeatNo] = useState('');
    const [Semester, setSemester] = useState("")


    const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('')
    const [textSecurity, SetTextSecurity] = useState(true);
    const [textSecurity2, SetTextSecurity2] = useState(true);
    const [value, setValue] = useState('');
    const [userDetials, setUserDetials] = useState([]);
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


    const handleSignup = () => {
        const UserData = {
            first_name: firstName,
            last_name: LastName,
            seat_no: seatNo,
            semester_no: Semester,
            semester_gpa: SemesterGpa,
            cgpa: Gpa,
            email: email,
            passcode: password,
        }
        console.log(UserData)
        axios.post(`${Url?.BaseUrl}/signup`, UserData)
            .then(response => {
                console.log('User registered successfully:', response.data.message);
                Alert.alert('Success', 'User registered successfully', [

                    { text: 'OK', onPress: () => navigation.goBack() },
                ]);

            })
            .catch(error => {
                // console.error('Failed to register user:', error);
                Alert.alert('Error', 'Failed to register user');
            });
    };
    const handleSkillCourses = () => {
        const UserData = {
            seat_no: seatNo,
            c_name: value,

        }
        console.log(UserData)
        axios.post(`${Url?.BaseUrl}/Skills`, UserData)
            .then(response => {
                console.log('Api hit successfully:', response.data.message);
                // Alert.alert('Success', 'User registered successfully');
            })
            .catch(error => {
                // console.error('Failed to hit api skilss:', error);
                // Alert.alert('Error', 'Failed to register user');
            });
    };

    const GetUserDeatils = () => {
        const UserData = {
            seat_no: seatNo,

        }
        console.log(UserData)
        axios.post(`${Url?.BaseUrl}/userDetails`, UserData)
            .then(response => {
                console.log('Api hit successfully user:', response?.data);
                // Alert.alert('Success', 'User registered successfully');
                setUserDetials(response?.data)
            })
            .catch(error => {
                // console.error('Failed to hit api user:', error);
                // Alert.alert('Error', 'Failed to register user');
            });
    };

    useEffect(() => {
        GetUserDeatils()
    }, [])


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
        console.log("data--", data)


    };

    return (

        <ScrollView style={styles.container}>
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


        </ScrollView>
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