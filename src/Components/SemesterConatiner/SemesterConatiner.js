import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TextLabel from '../TextLabel/TextLable'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import Colors from '../../Utilitis/Colors'
import { FontSizes } from '../../Constants/AppFonts'

export default function SemesterConatiner() {
    return (
        <View style={styles?.container} >
            <View>
                <TextLabel label={"Semester GPA"} fontWeight={"700"} marginTop={verticalScale(12)} />
                <View style={styles?.SemesterConatiner}>
                    <TextLabel label={"3.24/4"} color={Colors?.white} fontWeight={"bold"} alignSelf={"center"}  fontSize={FontSizes?.Large} />
                </View>
            </View>
            <View style={{ marginRight: scale(12) }}>
                <TextLabel label={"Overall GPA"} fontWeight={"700"} marginTop={verticalScale(12)} />
                <View style={styles?.overAllConatiner}>
                    <TextLabel label={"3.12/4"} color={Colors?.black} fontWeight={"bold"} alignSelf={"center"} fontSize={FontSizes?.Large} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginLeft: scale(15),
        marginTop: verticalScale(10),
        justifyContent: "space-between",
    },
    SemesterConatiner: {
        backgroundColor: Colors?.Blue,
        paddingHorizontal: moderateScale(40),
        paddingVertical: verticalScale(20),
        borderRadius: 8,
        marginTop: 8,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.19,
        shadowRadius: 5.62,
        elevation: 6
    },
    overAllConatiner: {
        backgroundColor: Colors?.white,
        paddingHorizontal: moderateScale(40),
        paddingVertical: verticalScale(20),
        borderLeftWidth:15,
        borderColor:Colors?.Blue,
        borderRadius: 8,
        marginTop: 8,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.19,
        shadowRadius: 5.62,
        elevation: 6
    }
})