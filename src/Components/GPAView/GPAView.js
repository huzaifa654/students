import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {FontFamily, FontSizes} from '../../Constants/AppFonts';

export default function GPAView({semesterGPA, overallGPA}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {semesterGPA ? semesterGPA : overallGPA} / <Text>4</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#24354f',
    padding: moderateScale(10),
    width: scale(155),
    height: verticalScale(85),
    borderRadius: 15,
    // marginLeft: scale(22),
    marginTop: verticalScale(12),
    // marginRight: -2,
  },
  text: {
    fontSize: FontSizes.Large,
    color: 'white',
    fontWeight: 'bold',
    fontFamily: FontFamily.Arsenal_Bold,
    textAlign: 'center',
    marginTop: verticalScale(12),
  },
});
