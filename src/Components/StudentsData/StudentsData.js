/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  moderateScale,
  scale,
  verticalScale,
} from '../../Utilitis/ResponsiveSizes';
import GlobalStyles from '../../Utilitis/GlobalStyles';
import {studentImage} from '../../Constants/AppImages';
import TextLabel from '../TextLabel/TextLable';
import {FontFamily, FontSizes} from '../../Constants/AppFonts';

export default function StudentsData() {
  return (
    <TouchableOpacity style={[styles.container, GlobalStyles.Shadow2]}>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={studentImage}
          resizeMode="contain"
          style={[styles.img]}
        />
        <View style={{marginLeft: scale(12), marginTop: verticalScale(6)}}>
          <Text
            style={{
              fontWeight: 'bold',
              fontFamily: FontFamily.Arsenal_Bold,
              fontSize: FontSizes.Medium,
              color: 'black',
            }}>
            Name:{'  '}
            <Text style={{fontWeight: '400'}}>Baqar Raza</Text>
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              fontFamily: FontFamily.Arsenal_Bold,
              fontSize: FontSizes.Medium,
              color: 'black',
              marginTop: 5,
            }}>
            Seat No:{'  '}
            <Text style={{fontWeight: '400'}}>B-20102069</Text>
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              fontFamily: FontFamily.Arsenal_Bold,
              fontSize: FontSizes.Medium,
              color: 'black',
              marginTop: 5,
            }}>
            Semester:{'  '}
            <Text style={{fontWeight: '400'}}>5th</Text>
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: moderateScale(15),
    marginHorizontal: scale(15),
    borderRadius: 12,
    marginTop: verticalScale(22),
  },
  img: {
    width: 105,
    height: 105,
    borderRadius: 100,
    aspectRatio: 1 / 1,
  },
});
