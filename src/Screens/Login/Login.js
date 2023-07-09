/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
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

export default function Login() {
    const performGetRequest = async () => {
        try {
            const response = await axios.get('http://192.168.0.136:3000/Students');
            console.log('Response:', response.data);
        } catch (error) {
            console.error('Error==============:', error);
        }
    };


    useEffect(() => {
        performGetRequest()

    }, [])

    const navigation = useNavigation()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [textSecurity, SetTextSecurity] = useState(true);
    return (
        <View style={styles.container}>
            <Image source={KuLogo} resizeMode="contain" style={styles.img} />

            <TextLabel label={'Welcome!'} fontSize={FontSizes.Large} fontFamily={FontFamily.Arsenal_Bold} marginTop={25} marginLeft={22} />
            <TextLabel label={'Please sign in to continue'} fontSize={FontSizes.LargeMedium} fontFamily={FontFamily.Arsenal_Bold} marginBottom={25} marginLeft={22} />

            <CustomInput
                placeholder="Email"
                value={email}
                keybord={'email-address'}
                setValue={setEmail}
                type={'ICON'}
                icon={EmailIcon}
                tintColor={Colors.AppBlue1}
                width={"90%"}

                color={Colors.AppBlue1}
                placeholderTextColor={Colors.AppBlue1}
            />
            <CustomInput
                tintColor={Colors.AppBlue1}
                color={Colors.AppBlue1}
                placeholderTextColor={Colors.AppBlue1}
                placeholder="Password"
                secureTextEntry={textSecurity}
                secure={true}
                value={password}
                setValue={setPassword}
                type={'ICON'}
                icon={LockIcon}
                width={"90%"}

                marginTop={20}
                SetsecureTextEntry={SetTextSecurity}
            />

            <CustomButton
                text="Login"
                onPress={() => navigation.replace('Profile')}
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