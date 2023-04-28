import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {
  StarBackground,
  AppTransparentSquareLogo,
  LockIcon,
  EmailIcon,
  BlueClearnerLogo,
} from '../../../Constants/AppImages';
import FullScreenBG from '../../../Components/FullScreenBG/FullScreenBG';
import TextLabel from '../../../Components/TextLabel/TextLable';
import {FontFamily, FontSizes} from '../../../Constants/AppFonts';
import {verticalScale} from '../../../Utilitis/ResponsiveSizes';
import CustomButton from '../../../Components/CustomButton';
import CustomInput from '../../../Components/CustomInput';
import Colors from '../../../Utilitis/Colors';
import GlobalStyles from '../../../Utilitis/GlobalStyles';
import SocialLogin from '../../../Components/SocialLogins/SocialLogin';

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [textSecurity, SetTextSecurity] = useState(true);

  return (
    <FullScreenBG source={StarBackground}>
      <ScrollView style={styles.container}>
        <Image
          source={BlueClearnerLogo}
          resizeMode={'contain'}
          style={styles.image}
        />
        <View style={styles.loginView}>
          <TextLabel
            label={'Welcome!Please'}
            fontSize={FontSizes.Large}
            fontFamily={FontFamily.Arsenal_Bold}
            marginTop={40}
          />
          <TextLabel
            label={'Sign in to continue'}
            fontSize={FontSizes.Large}
            fontFamily={FontFamily.Arsenal_Bold}
            marginBottom={25}
          />

          <CustomInput
            placeholder="Email"
            value={email}
            keybord={'email-address'}
            setValue={setEmail}
            type={'ICON'}
            width={'100%'}
            icon={EmailIcon}
            tintColor={Colors.AppBlue1}
            color={Colors.AppBlue1}
            placeholderTextColor={Colors.AppBlue1}
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

          <TouchableOpacity
            onPress={() => navigation.navigate('ForgotPassword')}>
            <TextLabel
              label={'Forgot Password ?'}
              fontSize={FontSizes.Small}
              fontFamily={FontFamily.Poppins_Regular}
              alignSelf={'flex-end'}
              marginTop={15}
              color={Colors.blackOpacity50}
            />
          </TouchableOpacity>

          <CustomButton
            text="Login"
            onPress={() => navigation.navigate('BottomNavigation')}
            bgColor={Colors.AppGreen}
            marginTop={30}
          />

          {/* <View style={[GlobalStyles.rowFull, GlobalStyles.MarginTop20]}>
            <View style={styles.lines} />
            <TextLabel
              label={'Or'}
              fontSize={FontSizes.Small}
              fontFamily={FontFamily.Poppins_Regular}
              color={Colors.blackOpacity50}
            />
            <View style={styles.lines} />
          </View>

          <SocialLogin /> */}

          <TouchableOpacity
            style={[
              GlobalStyles.rowCenterFull,
              GlobalStyles.MarginTop30,
              GlobalStyles.MarginBottom20,
            ]}
            onPress={() => navigation.navigate('SignupScreen')}>
            <TextLabel
              label={"Don't have an account?"}
              fontSize={FontSizes.Small}
              fontWeight={'400'}
              fontFamily={FontFamily.Poppins_Regular}
              color={Colors.black}
            />
            <TextLabel
              label={' Sign up'}
              fontWeight={'400'}
              fontSize={FontSizes.Small}
              fontFamily={FontFamily.Poppins_Regular}
              color={Colors.AppBlue1}
            />
          </TouchableOpacity>
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
    marginTop: verticalScale(32),
  },
  loginView: {
    width: '85%',
    alignSelf: 'center',
    height: '100%',
  },
  lines: {
    width: '45%',
    height: verticalScale(1),
    backgroundColor: Colors.blackOpacity50,
  },
});
