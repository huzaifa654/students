/* eslint-disable prettier/prettier */
import { StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import TextLabel from '../TextLabel/TextLable'
import { FontFamily, FontSizes } from '../../Constants/AppFonts'
import Lottie from 'lottie-react-native';
import Colors from '../../Utilitis/Colors'
import { Arrow } from '../../Constants/AppImages'

export default function Semester({ text, onPress }) {
    return (
        <TouchableOpacity style={styles.Skillcontaner} onPress={onPress}>

            <TextLabel
                label={text}
                color={'white'}
                // fontWeight={'bold'}
                fontFamily={FontFamily.Arsenal_Bold}
                fontSize={FontSizes.Large}
                alignSelf={"center"}
            />
            {/* <TextLabel label={`This course will provide you alot of skills in your career`} color={'white'} width={"80%"} marginTop={5} /> */}


            {/* <Lottie style={styles.lottie}
                source={require('../../Animation/Skills.json')}
                autoPlay
                speed={0.5}
                loop={true} /> */}
            <Image source={Arrow} style={styles.img} resizeMode='contain' />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    Skillcontaner: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: '#24354f',
        padding: moderateScale(15),
        marginHorizontal: scale(12),
        marginTop: verticalScale(22),
        borderRadius: 12,
        alignItems: "center"


    },
    lottie: {
        height: verticalScale(85),
        width: scale(85),
        alignItems: "center",
        marginBottom: verticalScale(32),
        marginRight: scale(12)


    },
    img: {
        tintColor: "white",
        width: scale(20),
        height: verticalScale(20),
        alignSelf: "center",
        alignItems: "center"
    }
})