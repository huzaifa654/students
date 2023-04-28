import React from "react";
import { View, StyleSheet, Image } from "react-native";

import { moderateScale, verticalScale } from "../../../Utilitis/ResponsiveSizes";
import Colors from "../../../Utilitis/Colors";
import TextLabel from "../../TextLabel/TextLable";
import { AppTransparentSquareLogo, WawesBottom1Icon } from "../../../Constants/AppImages";
import CustomButton from "../../CustomButton";
import { FontFamily, FontSizes } from "../../../Constants/AppFonts";
import GlobalStyles from "../../../Utilitis/GlobalStyles";
import GradientFullScreenBG from '../../GradientFullScreenBG/GradientFullScreenBG'

export default function ModalPattern1({ setValue, msg, msg2, OnPress, btnTittle }) {

    return (
        <GradientFullScreenBG style={styles.container}>
            <Image source={AppTransparentSquareLogo} resizeMode={'contain'} style={styles.image} />

            <TextLabel
                label={msg}
                fontFamily={FontFamily.Arsenal_Bold}
                textAlign={'center'}
                fontSize={FontSizes.LargeMedium}
                marginTop={30}
                color={Colors.black}
                alignSelf={'center'} />

            {msg2 && <TextLabel
                label={msg2}
                fontFamily={FontFamily.Arsenal_Bold}
                color={Colors.black}
                fontSize={FontSizes.LargeMedium}
                textAlign={'center'}
                marginTop={30}
                alignSelf={'center'} />}

            <Image source={WawesBottom1Icon} resizeMode={'cover'} style={GlobalStyles.FixedImageView} />

            <CustomButton
                text={btnTittle}
                onPress={() => {
                    setValue(false)
                    OnPress && OnPress()
                }}
                bgColor={Colors.AppGreen}
                marginTop={40}
                marginBottom={35}
            />
        </GradientFullScreenBG>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        alignSelf: 'center',
        borderRadius: moderateScale(15),
        backgroundColor: Colors.white,
        overflow: "hidden"
    },
    image: {
        width: "50%",
        height: verticalScale(100),
        alignSelf: "center"
    },

})