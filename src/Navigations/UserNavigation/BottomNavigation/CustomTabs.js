import React from 'react';
import { View, Image, StyleSheet } from 'react-native'
import TextLabel from '../../../Components/TextLabel/TextLable';
import Colors from '../../../Utilitis/Colors';
import { BottomTabActiveImage, ChatIcon } from '../../../Constants/AppImages';
import { moderateScale, moderateScaleVertical, verticalScale } from '../../../Utilitis/ResponsiveSizes';

export default function CustomTabs({ isFocus, label, icon }) {
  return (
    <View style={styles.View}>
      {label == '' ?
        <Image source={icon} style={styles.centerIcons} resizeMode={'contain'} />
        :
        <>
          <Image source={icon} style={isFocus ? styles.ActiveImage : styles.UnActiveImage} resizeMode={'contain'} />
          <TextLabel label={label} fontSize={9} color={isFocus ? Colors.AppBlue2 : Colors.AppBlue1} marginTop={5} />
          {isFocus && <Image source={BottomTabActiveImage} style={styles.UnActiveImage} resizeMode={'contain'} />}
        </>
      }

    </View>
  )
};

const styles = StyleSheet.create({
  ActiveImage: { height: 20, width: 20, tintColor: Colors.AppBlue2 },
  UnActiveImage: { height: 20, width: 25, },
  View: {
    alignItems: 'center',
    height: verticalScale(40),
    width: moderateScaleVertical(50),
    justifyContent: 'center',
    position: "absolute",
    bottom: 8
  },
  centerIcons: {
    height: verticalScale(150),
    width: moderateScale(150),
    marginTop: verticalScale(-70)
  }
})
