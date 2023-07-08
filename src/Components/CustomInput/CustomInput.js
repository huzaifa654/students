import React from 'react';
import { View, Pressable, TextInput, StyleSheet, Image } from 'react-native';
import { moderateScale, verticalScale } from '../../Utilitis/ResponsiveSizes';
import Colors from '../../Utilitis/Colors';
// import { EyeIcon, EyeIconClose } from '../../Constants/AppImages';
import { FontFamily } from '../../Constants/AppFonts';
import GlobalStyles from '../../Utilitis/GlobalStyles';
import { EyeIcon, EyeIconClose } from '../../Constants/AppImages';

const CustomInput = ({
  maxLength,
  value,
  setValue,
  placeholder,
  secureTextEntry,
  keybord,
  multiline,
  numberOfLines,
  icon,
  type,
  SetsecureTextEntry,
  secure,
  width,
  alignSelf,
  marginTop,
  Bg,
  borderRadius,
  placeholderTextColor,
  tintColor,
  fontFamily,
  iconType,
  borderWidth,
  borderColor,
  color,
  height,
}) => {
  return (
    <View
      style={[
        styles.container,
        GlobalStyles.Shadow4,
        styles[`con_${type}`],
        width ? { width } : null,
        marginTop ? { marginTop } : null,
        Bg ? { backgroundColor: Bg } : { backgroundColor: Colors.white },
        borderRadius ? { borderRadius } : {},
        borderWidth ? { borderWidth } : {},
        borderColor ? { borderColor } : { alignSelf: 'center' },
        alignSelf ? { alignSelf } : {},
        height ? { height } : {},
      ]}>
      {type == 'ICON' ? (
        <Image
          source={icon}
          style={[
            styles.img,
            tintColor ? { tintColor } : { tintColor: Colors.gray },
          ]}
          resizeMode={'contain'}
        />
      ) : null}
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={[
          styles.input,
          fontFamily ? { fontFamily } : { fontFamily: FontFamily.Poppins_Regular },
          color ? { color } : { color: Colors.black },
          height ? { height } : {},
        ]}
        secureTextEntry={secureTextEntry}
        keyboardType={keybord ? keybord : 'default'}
        placeholderTextColor={
          placeholderTextColor ? placeholderTextColor : Colors.black
        }
        multiline={multiline}
        numberOfLines={numberOfLines}
        maxLength={maxLength}
      />
      {secure == true ? (
        <Pressable onPress={() => SetsecureTextEntry(!secureTextEntry)}>
          <Image
            source={secureTextEntry != true ? EyeIcon : EyeIconClose}
            style={[
              styles.img2,
              tintColor ? { tintColor } : { tintColor: Colors.black },
            ]}
            resizeMode={'contain'}
          />
        </Pressable>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 60,
    color: '#000',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  input: {
    width: '90%',
    color: '#000',
  },
  con_ICON: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  img: {
    height: 20,
    width: 20,
    tintColor: Colors.black,
  },
  img2: {
    height: 20,
    width: 20,
    marginLeft: -20,
    tintColor: Colors.white,
  },
});

export default CustomInput;
