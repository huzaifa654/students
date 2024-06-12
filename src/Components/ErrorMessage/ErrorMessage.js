import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TextLabel from '../TextLabel/TextLable'
import Colors from '../../Utilitis/Colors'
import { FontFamily, FontSizes } from '../../Constants/AppFonts'
import { scale, verticalScale } from 'react-native-size-matters'

export default function ErrorMessage({error}) {
  return (
    <View >
       <Text style={styles?.text}>{error}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    text:{
        color:"red",
        fontSize:FontSizes?.Small,
        marginLeft:scale(25),
        marginVertical:verticalScale(5)
    }
})