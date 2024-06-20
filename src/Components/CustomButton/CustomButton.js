/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { FontFamily, FontSizes } from '../../Constants/AppFonts';
import Colors from '../../Utilitis/Colors';
import GlobalStyles from '../../Utilitis/GlobalStyles';
import { verticalScale } from '../../Utilitis/ResponsiveSizes';

const CustomButton = ({
  onPress,
  text,
  bgColor,
  fgColor,
  width,
  marginTop,
  Icon,
  marginLeft,
  fontSize,
  height,
  marginBottom,
  borderColor,
  disabled,
  fontWeight
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled == true ? true : false}
      style={[
        styles.container,
        GlobalStyles.Shadow2,
        bgColor ? { backgroundColor: bgColor } : {},
        width ? { width } : {},
        marginTop ? { marginTop } : {},
        Icon ? { flexDirection: 'row', justifyContent: 'space-between' } : {},
        marginLeft ? { marginLeft } : {},
        height ? { height } : {},
        marginBottom ? { marginBottom } : {},
        borderColor ? { borderColor: borderColor, borderWidth: 1 } : {},
      ]}>
      {Icon ? (
        <Image
          source={Icon}
          style={{ height: 30, width: 30, tintColor: '#fff' }}
        />
      ) : null}
      <Text
        style={[
          styles.text,
          fgColor ? { color: fgColor } : {},
          fontSize ? { fontSize } : { fontSize: FontSizes.LargeMedium },
          fontWeight ? { fontWeight: fontWeight } : {},
        ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    height: verticalScale(55),
    width: '50%',
    alignSelf: 'center',
  },

  text: {
    color: Colors.black,
    fontFamily: FontFamily.Arsenal_Bold,
  },
});

export default CustomButton;
