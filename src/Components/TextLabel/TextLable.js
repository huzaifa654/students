import React from 'react';
import {Text, View} from 'react-native';
import {
  verticalScale,
  moderateScale,
  textScale,
  scale,
} from '../../Utilitis/ResponsiveSizes';
import Colors from '../../Utilitis/Colors';
import {FontFamily, FontSizes} from '../../Constants/AppFonts';

const TextLabel = ({
  label,
  fontSize,
  color,
  marginTop,
  paddingHorizontal,
  fontFamily,
  marginLeft,
  alignSelf,
  marginBottom,
  textAlign,
  fontWeight,
  marginRight,
  width,
  numOfLine,
  adjustsFontSizeToFit,
  marginHorizental,
}) => {
  return (
    <View
      style={[
        marginTop ? {marginTop: verticalScale(marginTop)} : {marginTop: 0},
        alignSelf ? {alignSelf} : {},
        marginRight ? {marginRight} : {},
        width ? {width} : {},
      ]}>
      <Text
        numberOfLines={numOfLine}
        allowFontScaling={false}
        adjustsFontSizeToFit={adjustsFontSizeToFit == true ? true : false}
        style={[
          fontFamily ? {fontFamily} : {fontFamily: FontFamily.Poppins_Regular},
          fontSize
            ? {fontSize: textScale(fontSize)}
            : {fontSize: textScale(FontSizes.Medium)},
          color ? {color} : {color: Colors.black},
          marginLeft ? {marginLeft: moderateScale(marginLeft)} : {},
          marginBottom ? {marginBottom: moderateScale(marginBottom)} : {},
          textAlign ? {textAlign} : {},
          fontWeight ? {fontWeight} : {},
          marginHorizental ? {marginHorizontal: scale(marginHorizental)} : {},
        ]}>
        {label}
      </Text>
    </View>
  );
};

export default TextLabel;
