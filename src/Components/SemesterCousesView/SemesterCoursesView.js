import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import TextLabel from '../TextLabel/TextLable';
import {FontSizes} from '../../Constants/AppFonts';
import {Sir, studentImage} from '../../Constants/AppImages';
import Colors from '../../Utilitis/Colors';

export default function SemesterCoursesView() {
  return (
    <View>
      <View style={styles.nameView}>
        <TextLabel
          label={'Data Structures & Alogorthims'}
          color={'white'}
          //   fontWeight={'bold'}
          fontSize={FontSizes.Large}
        />
        <TextLabel
          label={'BSCS-402'}
          color={'white'}
          //   fontWeight={'bold'}
          //   fontSize={FontSizes.Large}
        />
        <View
          style={{
            flexDirection: 'row-reverse',
            justifyContent: 'space-between',
            // marginTop: verticalScale(1),
            marginBottom: 5,
          }}>
          <Image source={Sir} style={styles.img} />
          <TextLabel
            label={'Sir Muhammad Saeed'}
            color={Colors.AppBlue1}
            // fontWeight={'bold'}
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
    marginHorizontal: scale(12),
    marginTop: verticalScale(22),
    borderTopRightRadius: 12,
    borderTopLeftRadius: 22,
    borderBottomLeftRadius: 12,
  },
  img: {
    width: 55,
    height: 55,
    borderRadius: 100,
  },
});
