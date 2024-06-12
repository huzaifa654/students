/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { EmailIcon, KuLogo, LockIcon } from '../../Constants/AppImages'
import { scale, verticalScale } from 'react-native-size-matters'
import TextLabel from '../../Components/TextLabel/TextLable'
import { FontFamily, FontSizes } from '../../Constants/AppFonts'
import { useNavigation } from '@react-navigation/native'
import CustomInput from '../../Components/CustomInput/CustomInput'
import Colors from '../../Utilitis/Colors'
import CustomButton from '../../Components/CustomButton/CustomButton'
import GlobalStyles from '../../Utilitis/GlobalStyles'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setUserdetails } from '../../../Store/Reducer/UserReducer'
import { Url } from '../../Constants/AppText'
import { useForm } from 'react-hook-form'
import ErrorMessage from '../../Components/ErrorMessage/ErrorMessage'

export default function Login() {




    const dispatch = useDispatch();
    const {
        userDetails
    } = useSelector(state => state.UserDetails);
    console.log("userDetails===", userDetails)
    const navigation = useNavigation()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [textSecurity, SetTextSecurity] = useState(true);
    const handleLogin = async () => {
        const UserData = {

            seat_no: email,
            passcode: password,
        }
        console.log(UserData)
        axios.post(`${Url?.BaseUrl}/login`, UserData)
            .then(response => {

                console.log('User login successfully:', response.data.message);
                navigation.replace("Profile")

            })

            .catch(error => {
                // console.error('Failed to login user:', error);
                Alert.alert('Error', 'Failed to login user');
            });
    };

    const GetUserDeatils = () => {
        const UserData = {
            seat_no: email,

        }
        console.log(UserData)
        axios.post(`${Url?.BaseUrl}/userDetails`, UserData)
            .then(response => {
                console.log('Api hit successfully:', response?.data);
                dispatch(
                    setUserdetails(
                        response?.data
                    ),
                );
                // Alert.alert('Success', 'User registered successfully');

            })
            .catch(error => {
                // console.error('Failed to hit api:', error);
                // Alert.alert('Error', 'Failed to register user');
            });
    };
    const {
        control,
        handleSubmit,
        formState: { errors },
        register,
        reset,
    } = useForm({
        mode: 'all',
    });
    const onSubmit = data => {
        console.log("data--", data)

    };
    console.log("errors?.email", errors?.email)

    return (
        <View style={styles.container}>
            <Image source={KuLogo} resizeMode="contain" style={styles.img} />
            <ScrollView>
                <TextLabel label={'Welcome!'} fontSize={FontSizes.Large} fontFamily={FontFamily.Arsenal_Bold} fontWeight={"bold"} marginTop={25} marginLeft={22} />
                <TextLabel label={'Please sign in to continue'} fontSize={FontSizes.LargeMedium} fontFamily={FontFamily.Arsenal_Bold} marginBottom={25} marginLeft={22} />


                <CustomInput
                    placeholder="Email"
                    name="email"
                    control={control}
                    keybord={'email-address'}
                    type={'ICON'}
                    icon={EmailIcon}
                    tintColor={Colors.AppBlue1}
                    width={"90%"}
                    color={Colors.AppBlue1}
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
                    tintColor={Colors.AppBlue1}
                    color={Colors.AppBlue1}
                    placeholder={"Password"}
                    placeholderTextColor={Colors.AppBlue1}
                    name={"Password"}
                    control={control}
                    secureTextEntry={textSecurity}
                    secure={true}
                    type={'ICON'}
                    icon={LockIcon}
                    width={"90%"}
                    marginTop={20}
                    SetsecureTextEntry={SetTextSecurity}
                    rules={{
                        required: 'Password is required',

                    }}
                />

                {errors?.Password &&
                    <ErrorMessage error={errors?.Password?.message} />
                }

                <CustomButton
                    text="Login"
                    onPress={handleSubmit(onSubmit)}
                    bgColor={"#2596be"}
                    marginTop={30}
                    fgColor={"white"}
                />

                <TouchableOpacity style={[GlobalStyles.rowCenterFull, GlobalStyles.MarginTop30, GlobalStyles.MarginBottom20]} onPress={() => { navigation.navigate("Signup") }} >
                    <TextLabel
                        label={"Don't have an account?"}
                        fontSize={FontSizes.Small}
                        fontWeight={"400"}
                        fontFamily={FontFamily.Poppins_Regular}
                        color={Colors.black}
                    />
                    <TextLabel
                        label={" Register"}
                        fontWeight={"400"}
                        fontSize={FontSizes.Small}
                        fontFamily={FontFamily.Poppins_Regular}
                        color={Colors.AppBlue1}

                    />
                </TouchableOpacity>

            </ScrollView>
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