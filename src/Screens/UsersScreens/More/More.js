import React from 'react'
import { TouchableOpacity, StyleSheet, View, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import CustomHeader from '../../../Components/CustomHeader/CustomHeader';
import FullScreenBG from '../../../Components/FullScreenBG/FullScreenBG'
import TextLabel from '../../../Components/TextLabel/TextLable';
import { FontFamily, FontSizes } from '../../../Constants/AppFonts';
import { MaidBg, UserIcon, LogoutIcons, AboutUsIcons, MapMarkerIcon, SupportIcons } from '../../../Constants/AppImages';
import Colors from '../../../Utilitis/Colors';
import { moderateScale, verticalScale } from '../../../Utilitis/ResponsiveSizes';


export default function More() {

    const navigation = useNavigation()

    const MenuOption = ({ Label, Icon, onPress }) => {
        return (
            <TouchableOpacity style={styles.row} onPress={() => onPress()}>
                <Image source={Icon} resizeMode={'contain'} style={styles.icons} />
                <TextLabel
                    label={Label}
                    marginLeft={20}
                    fontSize={FontSizes.LargeMedium}
                    color={Colors.AppBlue1}
                    fontFamily={FontFamily.Arsenal_Bold} />
            </TouchableOpacity>
        )
    }


    return (
        <FullScreenBG source={MaidBg}>
            <CustomHeader Label={'More'} BackBtn={false} />
            <View style={styles.rowContainer}>
                <MenuOption Label={'Profile'} Icon={UserIcon} onPress={() => navigation.navigate('Profile')} />
                <MenuOption Label={'My Address'} Icon={MapMarkerIcon} onPress={() => alert(1)} />
                <MenuOption Label={'Support'} Icon={SupportIcons} onPress={() => alert(1)} />
                <MenuOption Label={'About Us'} Icon={AboutUsIcons} onPress={() => alert(1)} />
                <MenuOption Label={'Log Out'} Icon={LogoutIcons} onPress={() => navigation.navigate('LoginScreen')} />
            </View>
        </FullScreenBG>
    )
}

const styles = StyleSheet.create({
    row: {
        width: "100%",
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "row",
        height: verticalScale(80),
        borderBottomWidth: 0.7,
        borderColor: Colors.AppBlue1
    },
    icons: {
        height: verticalScale(30),
        width: moderateScale(30),
        tintColor: Colors.AppBlue3,
        marginLeft: moderateScale(10)
    },
    rowContainer: {
        width: "90%",
        alignSelf: "center",
        marginTop: verticalScale(40),
    }
})
