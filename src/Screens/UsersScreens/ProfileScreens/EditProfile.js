import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View, Image, Alert, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ProfileHeader from '../../../Components/ProfileHeader/ProfileHeader';
import FullScreenBG from '../../../Components/FullScreenBG/FullScreenBG'
import TextLabel from '../../../Components/TextLabel/TextLable';
import { FontFamily, FontSizes } from '../../../Constants/AppFonts';
import { MaidBg, UserIcon, LogoutIcons, AboutUsIcons, MapMarkerIcon, SupportIcons } from '../../../Constants/AppImages';
import Colors from '../../../Utilitis/Colors';
import { moderateScale, verticalScale, width } from '../../../Utilitis/ResponsiveSizes';
import CustomButton from '../../../Components/CustomButton';
import CustomInputWithLabel from '../../../Components/CustomInputWitlLabel/CustomInputWithLabel';
import GlobalStyles from '../../../Utilitis/GlobalStyles';
import CustomDropDown from '../../../Components/Dropdown/ElementDropDown';
import { BangladashStates, Districts } from '../../../Constants/AppData';


export default function EditProfile() {

    const navigation = useNavigation();
    const [firstName, setfirstName] = useState('Jhon');
    const [LastName, setLastName] = useState('Avetisyan');
    const [email, setEmail] = useState('Avetisyan@gmail.com');
    const [contact, setcontact] = useState('+1 456 889 09864');
    const [state, setstate] = useState();
    const [city, setcity] = useState()
    const [password, setPassword] = useState('123456');
    const [password2, setPassword2] = useState('123456')
    const [textSecurity, SetTextSecurity] = useState(true);
    const [textSecurity2, SetTextSecurity2] = useState(true);
    const [address, setaddress] = useState('Popular dhaka street near a zone')

    const FilterDistrictByStates = Districts?.filter((item) => {
        return item?.value == state
    });


    return (
        <FullScreenBG source={MaidBg}>
            <ProfileHeader Label={'Edit Profile'} BackBtn={false} />
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={styles.row2}>
                    <CustomInputWithLabel
                        label={'First Name'}
                        placeholder="First Name"
                        value={firstName}
                        onChangeText={setfirstName}
                        width={'48%'}
                        color={Colors.AppBlue1}
                        placeholderTextColor={Colors.AppBlue1}
                    />
                    <CustomInputWithLabel
                        label={'Last Name'}
                        placeholder="Last Name"
                        value={LastName}
                        onChangeText={setLastName}
                        width={'48%'}
                        color={Colors.AppBlue1}
                        placeholderTextColor={Colors.AppBlue1}
                    />
                </View>

                <View style={styles.row2}>
                    <CustomInputWithLabel
                        label={'Email'}
                        placeholder="Email"
                        value={email}
                        onChangeText={setEmail}
                        color={Colors.AppBlue1}
                        placeholderTextColor={Colors.AppBlue1}
                    />
                </View>

                <View style={styles.row2}>
                    <CustomInputWithLabel
                        label={'Contact'}
                        placeholder="Contact"
                        value={contact}
                        onChangeText={setcontact}
                        color={Colors.AppBlue1}
                        placeholderTextColor={Colors.AppBlue1}
                    />
                </View>

                <View style={styles.row2}>
                    <CustomDropDown
                        Label={'State'}
                        defaultValue={'Select State'}
                        statusBarIsTranslucent={true}
                        alignSelf={'center'}
                        setValue={setstate}
                        data={BangladashStates}
                        width={'48%'}
                    />
                    <CustomDropDown
                        Label={'City'}
                        defaultValue={'Select City'}
                        statusBarIsTranslucent={true}
                        alignSelf={'center'}
                        setValue={setcity}
                        data={FilterDistrictByStates}
                        width={'48%'}
                    />
                </View>

                <View style={styles.row2}>
                    <CustomInputWithLabel
                        label={'Address'}
                        placeholder="Address"
                        value={address}
                        onChangeText={setaddress}
                        color={Colors.AppBlue1}
                        placeholderTextColor={Colors.AppBlue1}
                    />
                </View>

                <View style={styles.row2}>
                    <CustomInputWithLabel
                        label={'Password'}
                        placeholder="Password"
                        value={password}
                        onChangeText={setPassword}
                        color={Colors.AppBlue1}
                        secureTextEntry={textSecurity2}
                        secure={true}
                        SetsecureTextEntry={SetTextSecurity2}
                        placeholderTextColor={Colors.AppBlue1}
                        type={'ICON'}
                    />
                </View>

                <View style={styles.row2}>
                    <CustomInputWithLabel
                        label={'Confirm Password'}
                        placeholder="Confirm Password"
                        value={password2}
                        onChangeText={setPassword2}
                        color={Colors.AppBlue1}
                        secureTextEntry={textSecurity}
                        secure={true}
                        SetsecureTextEntry={SetTextSecurity}
                        placeholderTextColor={Colors.AppBlue1}
                        type={'ICON'}
                    />
                </View>



                <CustomButton
                    text="Save"
                    onPress={() => navigation.goBack()}
                    bgColor={Colors.AppGreen}
                    marginTop={40}
                    marginBottom={15}
                />
            </ScrollView>
        </FullScreenBG>
    )
}

const styles = StyleSheet.create({
    row: {
        width: "100%",
        justifyContent: "flex-start",
        paddingBottom: moderateScale(10),
        borderBottomWidth: 0.7,
        borderColor: Colors.AppBlue1,
        marginTop: verticalScale(20)
    },
    row2: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignSelf: "center",
        width: '95%',
        alignItems: "center"
    },
    rowContainer: {
        width: "100%",
        alignSelf: "center",
        marginTop: verticalScale(40),
    }
})
