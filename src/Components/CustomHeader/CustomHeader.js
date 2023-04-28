import React from 'react'
import { View, ImageBackground, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { FontFamily } from '../../Constants/AppFonts'
import { HeaderBg, WhiteBackBtn } from '../../Constants/AppImages'
import Colors from '../../Utilitis/Colors'
import { moderateScale, verticalScale } from '../../Utilitis/ResponsiveSizes'
import TextLabel from '../TextLabel/TextLable'

export default function CustomHeader({ Label, BackBtn }) {

    const navigation = useNavigation()
    return (
        <ImageBackground
            source={HeaderBg}
            style={styles.container}
            resizeMode={'cover'}
            imageStyle={styles.imageStyle}>
            {BackBtn ?

                <View style={styles.Row}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={WhiteBackBtn} resizeMode={'contain'} style={styles.btn} />
                    </TouchableOpacity>
                    <TextLabel color={Colors.AppBlue3} label={Label} fontSize={30} fontFamily={FontFamily.Arsenal_Bold} alignSelf={'center'} />
                    <View style={styles.btn} />
                </View>

                :
                <TextLabel color={Colors.AppBlue3} label={Label} fontSize={30} fontFamily={FontFamily.Arsenal_Bold} alignSelf={'center'} />
            }




        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        height: verticalScale(85),
        width: "100%",
        // justifyContent: "center"
    },
    btn: {
        height: verticalScale(45),
        width: moderateScale(45)
    },
    Row: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
        width: "90%",
        alignSelf: "center",
    }
})