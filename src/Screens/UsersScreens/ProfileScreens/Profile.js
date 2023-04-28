import React from 'react'
import { TouchableOpacity, StyleSheet, View, Image, Alert, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ProfileHeader from '../../../Components/ProfileHeader/ProfileHeader';
import FullScreenBG from '../../../Components/FullScreenBG/FullScreenBG'
import TextLabel from '../../../Components/TextLabel/TextLable';
import { FontFamily, FontSizes } from '../../../Constants/AppFonts';
import { MaidBg, UserIcon, LogoutIcons, AboutUsIcons, MapMarkerIcon, SupportIcons } from '../../../Constants/AppImages';
import Colors from '../../../Utilitis/Colors';
import { moderateScale, verticalScale } from '../../../Utilitis/ResponsiveSizes';
import CustomButton from '../../../Components/CustomButton';


export default function Profile() {

    const navigation = useNavigation()

    const MenuOption = ({ Label, value }) => {
        return (
            <View style={styles.row}>

                <TextLabel
                    label={Label}
                    fontSize={FontSizes.Small}
                    color={Colors.AppBlue1} />

                <TextLabel
                    label={value}
                    fontSize={FontSizes.LargeMedium}
                    color={Colors.AppBlue2}
                    fontFamily={FontFamily.Arsenal_Bold} />

            </View>
        )
    }


    return (
        <FullScreenBG source={MaidBg}>
            <ProfileHeader Label={'Profile'} BackBtn={false} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.rowContainer}>
                    <MenuOption Label={'Name'} value={'Jhon Avetisyan'} />
                    <MenuOption Label={'Email'} value={'Avetisyan@gmail.com'} />
                    <MenuOption Label={'Phone Number'} value={'+1 976 678 5555'} />
                    <MenuOption Label={'State'} value={'Bihar'} />
                    <MenuOption Label={'City'} value={'Dhaka'} />
                    <MenuOption Label={'Address'} value={'5 street near dhaka station'} />
                    <MenuOption Label={'Password'} value={'*******************'} />

                </View>

                <CustomButton
                    text="Edit Profile"
                    onPress={() => navigation.navigate('EditProfile')}
                    bgColor={Colors.AppGreen}
                    marginTop={20}
                    marginBottom={10}
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
    rowContainer: {
        width: "90%",
        alignSelf: "center",
        marginTop: verticalScale(40),
    }
})
