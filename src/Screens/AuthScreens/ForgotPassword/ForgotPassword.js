import React, {useState} from 'react';
import {Image, StyleSheet, View, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {
  StarBackground,
  AppTransparentSquareLogo,
  EmailIcon,
  PasswordAuthIcon,
  ContactIcons,
} from '../../../Constants/AppImages';
import FullScreenBG from '../../../Components/FullScreenBG/FullScreenBG';
import TextLabel from '../../../Components/TextLabel/TextLable';
import {FontFamily, FontSizes} from '../../../Constants/AppFonts';
import {verticalScale} from '../../../Utilitis/ResponsiveSizes';
import CustomButton from '../../../Components/CustomButton';
import CustomInput from '../../../Components/CustomInput';
import Colors from '../../../Utilitis/Colors';

export default function ForgotPassword() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');

  return (
    <FullScreenBG source={StarBackground}>
      <ScrollView style={styles.container}>
        <Image
          source={AppTransparentSquareLogo}
          resizeMode={'contain'}
          style={styles.image}
        />
        <View style={styles.loginView}>
          <TextLabel
            label={'Forgot Password ?'}
            fontSize={FontSizes.Large}
            fontFamily={FontFamily.Arsenal_Bold}
            marginTop={25}
          />

          <Image
            source={PasswordAuthIcon}
            resizeMode={'contain'}
            style={styles.PasswordAuthIcon}
          />

          <CustomInput
            placeholder="Please enter your Phone Number"
            value={email}
            keybord={'email-address'}
            setValue={setEmail}
            type={'ICON'}
            width={'100%'}
            icon={ContactIcons}
            tintColor={Colors.AppBlue1}
            color={Colors.AppBlue1}
            placeholderTextColor={Colors.AppBlue1}
          />

          <CustomButton
            text="Next"
            onPress={() =>
              navigation.navigate('OtpAndVerifyScreen', {
                From: 'ForgotPassword',
              })
            }
            bgColor={Colors.AppGreen}
            marginTop={50}
            marginBottom={10}
          />
        </View>
      </ScrollView>
    </FullScreenBG>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '50%',
    height: verticalScale(100),
    alignSelf: 'center',
  },
  loginView: {
    width: '85%',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  lines: {
    width: '45%',
    height: verticalScale(1),
    backgroundColor: Colors.blackOpacity50,
  },
  PasswordAuthIcon: {
    width: '50%',
    height: verticalScale(300),
    alignSelf: 'center',
  },
});
