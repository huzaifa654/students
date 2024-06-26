import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../Utilitis/Colors'
import { scale, verticalScale } from 'react-native-size-matters'
import TextLabel from '../TextLabel/TextLable'
import { FontFamily } from '../../Constants/AppFonts'
import CustomButton from '../CustomButton'
import { useNavigation } from '@react-navigation/native'

export default function SuccessModal({ text, setvalue,onPress }) {
  const navigation = useNavigation()
  return (
    <View style={styles?.container}>
      <Image source={require("../../Assets/check.png")} resizeMode='contain' style={styles?.img} />
      <TextLabel label={text} textAlign={"center"} fontFamily={FontFamily?.Arsenal_Bold} fontWeight={"bold"} marginTop={12} marginBottom={12} />
      <CustomButton text={"Ok"} bgColor={Colors?.AppBlue1} height={45} marginTop={15} fgColor={Colors?.white} onPress={onPress} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors?.white,
    padding: 23,
    borderRadius: 12
  },
  img: {
    width: scale(45),
    height: verticalScale(45),
    alignSelf: "center",
    marginVertical: verticalScale(5)

  }
})