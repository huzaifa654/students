import React, {useState} from 'react';
import {Image, StyleSheet, View, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {
  StarBackground,
  AppTransparentSquareLogo,
  LockIcon,
  PasswordAuthIcon,
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
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const [textSecurity, SetTextSecurity] = useState(true);
  const [textSecurity2, SetTextSecurity2] = useState(true);

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
            label={'New Password'}
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
            tintColor={Colors.AppBlue1}
            color={Colors.AppBlue1}
            placeholderTextColor={Colors.AppBlue1}
            placeholder="Password"
            secureTextEntry={textSecurity}
            secure={true}
            value={password}
            setValue={setPassword}
            type={'ICON'}
            icon={LockIcon}
            width={'100%'}
            marginTop={20}
            SetsecureTextEntry={SetTextSecurity}
          />

          <CustomInput
            tintColor={Colors.AppBlue1}
            color={Colors.AppBlue1}
            placeholderTextColor={Colors.AppBlue1}
            placeholder="Confirm New Password"
            secureTextEntry={textSecurity2}
            secure={true}
            value={password2}
            setValue={setPassword2}
            type={'ICON'}
            icon={LockIcon}
            width={'100%'}
            marginTop={20}
            SetsecureTextEntry={SetTextSecurity2}
          />

          <CustomButton
            text="Confirm"
            onPress={() => navigation.navigate('LoginScreen')}
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
    height: verticalScale(250),
    alignSelf: 'center',
  },
});
