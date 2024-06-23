/* eslint-disable prettier/prettier */
/* eslint-disable semi */
// eslint-disable-next-line prettier/prettier
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import TextLabel from '../TextLabel/TextLable'
import { FontSizes } from '../../Constants/AppFonts'
import Lottie from 'lottie-react-native';
import Colors from '../../Utilitis/Colors'


export default function SkillCourseView({ skill }) {
    return (
        <TouchableOpacity style={styles.Skillcontaner}>
            <View>
                <TextLabel
                    label={skill}
                    color={'white'}
                    //   fontWeight={'bold'}
                    fontSize={FontSizes.Large}
                />
                <TextLabel label={`This course ${skill} will provide you alot of skills in your career`} color={'white'} width={"80%"} marginTop={5} />

            </View>
            <Lottie style={styles.lottie}
                source={require('../../Animation/Skills.json')}
                autoPlay
                speed={0.5}
                loop={true} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    Skillcontaner: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: Colors?.Blue,
        padding: moderateScale(15),
        marginHorizontal: scale(12),
        marginTop: verticalScale(22),
        borderTopRightRadius: 12,
        borderTopLeftRadius: 22,
        borderBottomLeftRadius: 12,

    },
    lottie: {
        height: verticalScale(85),
        width: scale(85),
        alignItems: "center",
        marginBottom: verticalScale(32),
        marginRight: scale(12)


    }
})