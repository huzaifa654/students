/* eslint-disable prettier/prettier */
import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import TextLabel from '../TextLabel/TextLable';
import { FontSizes } from '../../Constants/AppFonts';
import { Sir, studentImage } from '../../Constants/AppImages';
import Colors from '../../Utilitis/Colors';
import Lottie from 'lottie-react-native';

export default function SemesterCoursesView({ item }) {

  return (
    <View>
      <View style={styles.nameView}>
        <TextLabel
          label={item?.course_name}
          color={'white'}
          // width={"95%"}
          //   fontWeight={'bold'}
          fontSize={FontSizes.Large}
        />
        <TextLabel
          label={`Credit Hours: ${item?.credit_hours}`}
          color={'white'}
          marginTop={5}
        //   fontWeight={'bold'}
        //   fontSize={FontSizes.Large}
        />
        <View
          style={{
            flexDirection: 'row-reverse',
            justifyContent: 'space-between',
            marginTop: verticalScale(5),
            // marginBottom: 5,
          }}>
          <Lottie style={styles.img}
            source={require('../../Animation/Teachers.json')}
            autoPlay
            speed={2}
            loop={true} />
          <TextLabel
            label={item?.Teachers}
            color={Colors.AppBlue1}
            // fontWeight={'bold'}
            // width={"60%"}
            marginTop={5}
            fontSize={FontSizes.LargeMedium}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  nameView: {
    backgroundColor: '#24354f',
    padding: moderateScale(15),
    // marginHorizontal: scale(12),
    marginTop: verticalScale(22),
    borderTopRightRadius: 12,
    borderTopLeftRadius: 22,
    borderBottomLeftRadius: 12,
  },
  img: {
    width: scale(95),
    height: verticalScale(95),
    marginTop: verticalScale(-15)
    // borderRadius: 100,
  },
});
