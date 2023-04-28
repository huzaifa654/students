import React from 'react'
import { View, ImageBackground, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { FontFamily, FontSizes } from '../../Constants/AppFonts'
import { Userpictuer, WhiteBackBtn, RoundHedaerBg } from '../../Constants/AppImages'
import Colors from '../../Utilitis/Colors'
import { moderateScale, verticalScale } from '../../Utilitis/ResponsiveSizes'
import TextLabel from '../TextLabel/TextLable'

export default function ProfileHeader({ Label, BackBtn }) {

    const navigation = useNavigation()
    return (
        <View style={styles.BG}>
            <ImageBackground
                source={RoundHedaerBg}
                style={styles.container}
                resizeMode={'cover'}>

                <View style={styles.Row}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={WhiteBackBtn} resizeMode={'contain'} style={styles.btn} />
                    </TouchableOpacity>
                    <TextLabel color={Colors.AppBlue3} label={Label} fontSize={FontSizes.ExtraLarge} fontFamily={FontFamily.Arsenal_Bold} alignSelf={'center'} />
                    <View style={styles.btn} />
                </View>

                <Image source={Userpictuer} resizeMode={'contain'} style={styles.userProfilePic} />

            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: verticalScale(160),
        width: "100%",
    },
    BG: {
        backgroundColor: Colors.AppWhite,
        height: verticalScale(160 + 70)
    },
    btn: {
        height: verticalScale(55),
        width: moderateScale(55)
    },
    Row: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
        width: "95%",
        alignSelf: "center",
        marginTop: verticalScale(20)
    },
    userProfilePic: {
        height: verticalScale(160),
        width: moderateScale(160),
        position: "absolute",
        alignSelf: "center",
        bottom: verticalScale(-70)
    }
})