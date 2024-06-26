import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TextLabel from '../../../Components/TextLabel/TextLable'
import { scale, verticalScale } from 'react-native-size-matters'
import Colors from '../../../Utilitis/Colors'
import { FontSizes } from '../../../Constants/AppFonts'

export default function Lecture({item}) {
    console.log("item--",item)
    return (
        <View style={{marginBottom:verticalScale(12)}}>
            <TextLabel label={item?.Time} marginLeft={scale(20)} marginTop={verticalScale(20)} fontWeight={"bold"} />
            <View style={styles?.courseContainer}>
                <TextLabel label={item?.Code} fontWeight={"bold"} fontSize={FontSizes?.Small} />
                <TextLabel label={item?.name} color={Colors?.Blue} marginTop={verticalScale(5)} fontWeight={"bold"} fontSize={FontSizes?.Small} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    courseContainer: {
        backgroundColor: Colors?.white,
        borderRadius: 12,
        padding: 15,
        width: "90%",
        alignSelf: "center",
        marginTop: verticalScale(10),
        borderLeftColor: Colors?.Blue,
        borderLeftWidth: 25,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.17,
        shadowRadius: 3.05,
        elevation: 4
    }
})