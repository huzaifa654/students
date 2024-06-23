import { StyleSheet, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { back } from '../../Constants/AppImages'
import { scale, verticalScale } from 'react-native-size-matters'
import TextLabel from '../TextLabel/TextLable'
import { FontSizes } from '../../Constants/AppFonts'
import { useNavigation } from '@react-navigation/native'
import Colors from '../../Utilitis/Colors'

export default function Header({ label }) {
    const navigation = useNavigation()
    return (
        <View style={styles.header}>


            <TextLabel label={label} color={"white"} fontSize={FontSizes.Large} alignSelf={"center"} fontWeight={"bold"} />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: Colors?.Blue,
        padding: 24,
    },
    img: {
        width: scale(23),
        height: verticalScale(23),
        tintColor: "white",
    }
})