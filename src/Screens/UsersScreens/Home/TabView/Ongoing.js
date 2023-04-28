import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TextLabel from '../../../../Components/TextLabel/TextLable';
import {FontFamily, FontSizes} from '../../../../Constants/AppFonts';
import Colors from '../../../../Utilitis/Colors';

export default function Ongoing() {
  return (
    <View>
      <TextLabel
        label={'No Ongoing Booking'}
        textAlign={'center'}
        fontFamily={FontFamily.Arsenal_Bold}
        fontSize={FontSizes.LargeMedium}
        marginTop={125}
        color={Colors.AppBlue3}
      />
      <TextLabel
        label={'We will find your cleaning job online'}
        textAlign={'center'}
        color={'gray'}
        width={'78%'}
        marginLeft={92}
        justifyContent={'center'}
        // fontFamily={FontFamily.Arsenal_Bold}
        // fontSize={FontSizes.LargeMedium}
        marginTop={12}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
  },
});
