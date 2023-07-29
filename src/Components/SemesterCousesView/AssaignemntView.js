/* eslint-disable prettier/prettier */
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import TextLabel from '../TextLabel/TextLable'
import { FontSizes } from '../../Constants/AppFonts'
import Lottie from 'lottie-react-native';


export default function AssaignemntView({ item, date, due }) {
    console.log(item)
    return (
        <View style={styles.Skillcontaner}>
            <View>
                <TextLabel
                    label={item?.c_name}
                    color={'white'}
                    //   fontWeight={'bold'}
                    fontSize={FontSizes.Large}
                />
                <TextLabel label={item?.assignment} color={'white'} width={"80%"} marginTop={5} />
                <TextLabel label={`Announced date: ${date}`} color={'white'} width={"80%"} marginTop={5} />
                <TextLabel label={`Due date: ${due}`} color={'white'} width={"80%"} marginTop={5} />
            </View>
            <Lottie style={styles.lottie}
                source={require('../../Animation/work.json')}
                autoPlay
                speed={0.5}
                loop={true} />
        </View>
    )
}

const styles = StyleSheet.create({
    Skillcontaner: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: '#24354f',
        padding: moderateScale(15),
        // marginHorizontal: scale(12),
        width: "80%",
        marginTop: verticalScale(22),
        borderTopRightRadius: 12,
        borderTopLeftRadius: 22,
        borderBottomLeftRadius: 12,

    },
    lottie: {
        height: verticalScale(85),
        width: scale(95),
        alignItems: "center",
        marginBottom: verticalScale(32),
        marginRight: scale(12),


    }
})