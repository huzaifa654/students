/* eslint-disable prettier/prettier */
import { Alert, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
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

export default function Signup() {
    const navigation = useNavigation();
    const [firstName, setfirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [SemesterGpa, setSemesterGpa] = useState('');
    const [Gpa, setGpa] = useState('');
    const [seatNo, setSeatNo] = useState('');
    const [Semester, setSemester] = useState("")


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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

    return (

        <ScrollView style={styles.container}>
            <Image source={KuLogo} resizeMode="contain" style={styles.img} />
            <TextLabel label={'Welcome!'} fontSize={FontSizes.Large} fontFamily={FontFamily.Arsenal_Bold} marginTop={25} marginLeft={22} />
            <TextLabel label={'Please sign up to continue'} fontSize={FontSizes.LargeMedium} fontFamily={FontFamily.Arsenal_Bold} marginBottom={25} marginLeft={22} />

            <CustomInput
                placeholder="First Name"
                value={firstName}
                setValue={setfirstName}
                type={'ICON'}
                width={'90%'}
                icon={UserIcon}
                color={Colors.AppBlue1}
                placeholderTextColor={Colors.AppBlue1}
            />
            <CustomInput
                placeholder="Last Name"
                value={LastName}
                setValue={setLastName}
                type={'ICON'}
                width={'90%'}
                icon={UserIcon}
                color={Colors.AppBlue1}
                placeholderTextColor={Colors.AppBlue1}
            />
            <CustomInput
                placeholder="Seat No"
                value={seatNo}
                setValue={setSeatNo}
                type={'ICON'}
                width={'90%'}
                maxLength={10}

                icon={UserIcon}

                color={Colors.AppBlue1}
                placeholderTextColor={Colors.AppBlue1}
            />
            <CustomInput
                placeholder="Semester"
                value={Semester}
                setValue={setSemester}
                type={'ICON'}
                width={'90%'}
                icon={semester}
                keybord={"numeric"}
                maxLength={1}
                // tintColor={Colors.AppBlue1}
                color={Colors.AppBlue1}
                placeholderTextColor={Colors.AppBlue1}
            />
            <CustomInput
                placeholder="Semester GPA"
                value={SemesterGpa}
                setValue={setSemesterGpa}
                keybord={"numeric"}
                maxLength={4}
                type={'ICON'}
                width={'90%'}
                icon={GPA}
                // tintColor={Colors.AppBlue1}
                color={Colors.AppBlue1}
                placeholderTextColor={Colors.AppBlue1}
            />
            <CustomInput
                placeholder="Overall GPA"
                value={Gpa}
                setValue={setGpa}
                keybord={"numeric"}
                maxLength={4}
                type={'ICON'}
                width={'90%'}
                icon={GPA}
                // tintColor={Colors.AppBlue1}
                color={Colors.AppBlue1}
                placeholderTextColor={Colors.AppBlue1}
            />
            <CustomDropDown
                defaultValue={'Skilled Courses'}
                statusBarIsTranslucent={true}
                alignSelf={'center'}
                leftIcon={GPA}
                width={'90%'}
                border={true}
                data={citiesdata}
                setValue={setValue}
                value={value}
                placeholder={'Skilled Courses'}
            />

            <CustomInput
                placeholder="Email"
                value={email}
                keybord={'email-address'}
                setValue={setEmail}
                type={'ICON'}
                width={'90%'}
                icon={EmailIcon}
                color={Colors.AppBlue1}
                placeholderTextColor={Colors.AppBlue1}
            />
            <CustomInput
                color={Colors.AppBlue1}
                placeholderTextColor={Colors.AppBlue1}
                placeholder="Password"
                secureTextEntry={textSecurity}
                secure={true}
                value={password}
                setValue={setPassword}
                type={'ICON'}
                icon={LockIcon}
                width={'90%'}
                SetsecureTextEntry={SetTextSecurity}
            />
            <CustomInput
                color={Colors.AppBlue1}
                placeholderTextColor={Colors.AppBlue1}
                placeholder="Confirm Password"
                secureTextEntry={textSecurity2}
                secure={true}
                value={password2}
                setValue={setPassword2}
                type={'ICON'}
                icon={LockIcon}
                width={'90%'}
                SetsecureTextEntry={SetTextSecurity2}
            />


            <CustomButton
                text="Signup"
                onPress={() => { handleSignup(); handleSkillCourses() }}
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