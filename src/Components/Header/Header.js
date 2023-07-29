import { StyleSheet, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { back } from '../../Constants/AppImages'
import { scale, verticalScale } from 'react-native-size-matters'
import TextLabel from '../TextLabel/TextLable'
import { FontSizes } from '../../Constants/AppFonts'
import { useNavigation } from '@react-navigation/native'

export default function Header({ label }) {
    const navigation = useNavigation()
    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={back} style={styles.img} />
            </TouchableOpacity>

            <TextLabel label={label} color={"white"} fontSize={FontSizes.Large} alignSelf={"center"} marginLeft={scale(54)} />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#24354f',
        flexDirection: "row",
        // justifyContent: "space-between",
        padding: 24,
        // borderBottomLeftRadius: 23,
        // borderBottomRightRadius: 23
    },
    img: {
        width: scale(23),
        height: verticalScale(23),
        tintColor: "white",
    }
})