/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { backIcon, semester, studentImage } from '../../Constants/AppImages';
import { FontFamily, FontSizes } from '../../Constants/AppFonts';
import { useNavigation } from '@react-navigation/native';
import Lottie from 'lottie-react-native';
import { setUserdetails } from '../../../Store/Reducer/UserReducer';

export default function ProfileView({ name, seatNo, Semester }) {
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
    <View style={styles.container}>
      <TouchableOpacity onPress={() => { ConfirmLogout(); }}>
        <Lottie style={styles.logout}
          source={require('../../Animation/logout.json')}
          autoPlay
          speed={0.5}
          resizeMode='contain'
          loop={true} />
      </TouchableOpacity>
      <Lottie style={styles.img2}
        source={require('../../Animation/Student.json')}
        autoPlay
        speed={2}
        resizeMode='contain'
        loop={true} />

      <View style={{ marginTop: 10, marginBottom: 10 }}>
        <Text style={styles.text}>
          Name:{'  '}
          <Text>{name}</Text>
        </Text>
        <Text style={styles.text}>
          Seat no: <Text>{seatNo}</Text>
        </Text>
        <Text style={styles.text}>
          Semester:{'  '}
          <Text>{Semester == 1 && `${Semester}st` || Semester == 2 && `${Semester}nd` || Semester > 2 && `${Semester}th`}</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#24354f',
    padding: moderateScale(10),
    borderBottomLeftRadius: 55,
    borderBottomRightRadius: 55,
    marginBottom: 12
  },
  img: {
    width: 23,
    height: 23,
    tintColor: 'white',
    marginLeft: 12,
  },
  img2: {
    width: scale(140),
    height: scale(140),
    alignSelf: 'center',
    borderRadius: 100,
    tintColor: 'white',
    marginTop: verticalScale(14)

  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: FontFamily.Arsenal_Bold,
    fontSize: FontSizes.Medium,
    marginTop: 5,
  },
  logout: {
    width: scale(34),
    height: verticalScale(34),
    position: "absolute",
    top: 10,
    right: 5

  }
});
