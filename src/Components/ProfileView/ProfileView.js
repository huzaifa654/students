/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import { backIcon, semester, studentImage } from '../../Constants/AppImages';
import { FontFamily, FontSizes } from '../../Constants/AppFonts';
import { useNavigation } from '@react-navigation/native';

export default function ProfileView({ name, seatNo, Semester }) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>

      <Image source={studentImage} style={styles.img2} />

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
  },
  img: {
    width: 23,
    height: 23,
    tintColor: 'white',
    marginLeft: 12,
  },
  img2: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    borderRadius: 100,
    tintColor: 'white',
    marginTop: verticalScale(34)

  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: FontFamily.Arsenal_Bold,
    fontSize: FontSizes.Medium,
    marginTop: 5,
  },
});
