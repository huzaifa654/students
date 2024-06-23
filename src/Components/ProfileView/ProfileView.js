/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { Alert, StyleSheet, Text, Image, View } from 'react-native';
import React from 'react';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { backIcon, semester, studentImage } from '../../Constants/AppImages';
import { FontFamily, FontSizes } from '../../Constants/AppFonts';
import { useNavigation } from '@react-navigation/native';
import Lottie from 'lottie-react-native';
import { setUserdetails } from '../../../Store/Reducer/UserReducer';
import TextLabel from '../TextLabel/TextLable';
import Colors from '../../Utilitis/Colors';

export default function ProfileView({ name, id, Semester }) {
  const navigation = useNavigation();
  const ConfirmLogout = () => {
    Alert.alert('', 'Are you sure you want to logout', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'Yes', onPress: () => { navigation.replace("LoginScreen"); setUserdetails({}) } },
    ]);
  }
  return (
    <View style={styles?.row}>
      <View style={styles?.imageContainer}>
        <Image source={require("../../Assets/stu.png")} resizeMode='contain' style={styles?.image} />
      </View>
      <View style={{ alignSelf: "center" }}>
        <TextLabel label={name} fontFamily={FontFamily?.Arsenal_Bold} fontWeight={"bold"} marginLeft={scale(12)} />
        <View style={{ flexDirection: "row" }}>
          <TextLabel label={"Student ID:"} fontFamily={FontFamily?.Arsenal_Bold} fontWeight={"bold"} marginLeft={scale(12)} />
          <TextLabel label={id} fontFamily={FontFamily?.Arsenal_Bold} fontWeight={"bold"} color={Colors?.Blue} />
        </View>
        <View style={{ flexDirection: "row" }}>
          <TextLabel label={"BSCS-"} fontFamily={FontFamily?.Arsenal_Bold} fontWeight={"bold"} marginLeft={scale(12)} />
          <TextLabel label={`${Semester}th Semester`} fontFamily={FontFamily?.Arsenal_Bold} fontWeight={"bold"} color={Colors?.Blue} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width: scale(120),
    height: scale(120),
    marginTop: verticalScale(25)

  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 150,
    aspectRatio: 1 / 1,

  },
  row: {
    flexDirection: "row",
    marginTop: verticalScale(20),
    marginLeft: scale(12)

  },
});
