import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TextLabel from '../TextLabel/TextLable'
import { scale, verticalScale } from 'react-native-size-matters'
import Colors from '../../Utilitis/Colors'
import { FontSizes } from '../../Constants/AppFonts'

export default function SemesterCoucesContainer({item}) {
    return (
        <View style={{ marginLeft: scale(15), marginTop: verticalScale(5) }}>
            <View style={styles?.SemesterCoucesContainer}>
                <View style={styles?.childContainer}>
                    <TextLabel label={item[0]?.name} color={Colors?.white} fontWeight={"700"} marginLeft={scale(12)} />
                    <TextLabel label={item[0]?.code} color={Colors?.white} fontSize={FontSizes?.Small} marginLeft={scale(12)} marginTop={5} />
                </View>
                <View style={{paddingVertical:12}}>
                    <TextLabel label={item[0]?.teacher} color={Colors?.Blue} fontSize={FontSizes?.Medium} fontWeight={"bold"} marginLeft={scale(12)} marginTop={5} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    SemesterCoucesContainer: {
        backgroundColor: Colors?.white,
        width: "95%",
        marginTop: verticalScale(10),
        borderRadius:12,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.19,
        shadowRadius: 5.62,
        elevation: 6,

    },
    childContainer: {
        backgroundColor: Colors?.Blue,
        paddingVertical: 12,
        borderRadius:12,

    }
})