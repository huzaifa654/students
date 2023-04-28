import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Text,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {
  StarBackground,
  AppTransparentSquareLogo,
  LockIcon,
  EmailIcon,
  StatesIcons,
  CityIcons,
  UserIcon,
  ContactIcons,
  BlueClearnerLogo,
} from '../../../Constants/AppImages';
import FullScreenBG from '../../../Components/FullScreenBG/FullScreenBG';
import TextLabel from '../../../Components/TextLabel/TextLable';
import {FontFamily, FontSizes} from '../../../Constants/AppFonts';
import {
  moderateScale,
  verticalScale,
  width,
} from '../../../Utilitis/ResponsiveSizes';
import CustomButton from '../../../Components/CustomButton';
import CustomInput from '../../../Components/CustomInput';
import Colors from '../../../Utilitis/Colors';
import GlobalStyles from '../../../Utilitis/GlobalStyles';
import SocialLogin from '../../../Components/SocialLogins/SocialLogin';
import CustomDropDown from '../../../Components/Dropdown/ElementDropDown';
import {BangladashStates, Districts} from '../../../Constants/AppData';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

export default function SignupScreen() {
  const navigation = useNavigation();
  const [firstName, setfirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setcontact] = useState('');
  const [state, setstate] = useState();
  const [city, setcity] = useState();
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [textSecurity, SetTextSecurity] = useState(true);
  const [textSecurity2, SetTextSecurity2] = useState(true);
  const [checkboxState, setCheckboxState] = useState(false);

  const FilterDistrictByStates = Districts?.filter(item => {
    return item?.value == state;
  });

  return (
    <FullScreenBG source={StarBackground}>
      <Image
        source={BlueClearnerLogo}
        resizeMode={'contain'}
        style={styles.image}
      />
      <ScrollView style={styles.container}>
        <View style={styles.loginView}>
          <TextLabel
            label={'Sumbit your information!'}
            fontSize={FontSizes.Large}
            fontFamily={FontFamily.Arsenal_Bold}
            marginTop={25}
          />
          <TextLabel
            label={'and we will get back to you.'}
            fontSize={FontSizes.Large}
            fontFamily={FontFamily.Arsenal_Bold}
            marginBottom={25}
          />

          <CustomInput
            placeholder="First Name"
            value={firstName}
            setValue={setfirstName}
            type={'ICON'}
            width={'100%'}
            icon={UserIcon}
            tintColor={Colors.AppBlue1}
            color={Colors.AppBlue1}
            placeholderTextColor={Colors.AppBlue1}
          />
          <CustomInput
            placeholder="Last Name"
            value={LastName}
            setValue={setLastName}
            type={'ICON'}
            width={'100%'}
            icon={UserIcon}
            tintColor={Colors.AppBlue1}
            color={Colors.AppBlue1}
            placeholderTextColor={Colors.AppBlue1}
          />
          <CustomInput
            placeholder="Contact"
            value={contact}
            setValue={setcontact}
            keybord={'number-pad'}
            type={'ICON'}
            width={'100%'}
            icon={ContactIcons}
            tintColor={Colors.AppBlue1}
            color={Colors.AppBlue1}
            placeholderTextColor={Colors.AppBlue1}
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
          <CustomDropDown
            defaultValue={'Select State'}
            statusBarIsTranslucent={true}
            alignSelf={'center'}
            setValue={setstate}
            data={BangladashStates}
            leftIcon={StatesIcons}
          />
          <CustomDropDown
            defaultValue={'Select City'}
            statusBarIsTranslucent={true}
            alignSelf={'center'}
            setValue={setcity}
            data={FilterDistrictByStates}
            leftIcon={CityIcons}
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
            SetsecureTextEntry={SetTextSecurity}
          />
          <CustomInput
            tintColor={Colors.AppBlue1}
            color={Colors.AppBlue1}
            placeholderTextColor={Colors.AppBlue1}
            placeholder="Confirm Password"
            secureTextEntry={textSecurity2}
            secure={true}
            value={password2}
            setValue={setPassword2}
            type={'ICON'}
            icon={LockIcon}
            width={'100%'}
            SetsecureTextEntry={SetTextSecurity2}
          />
          <View style={styles.checkboxView}>
            <BouncyCheckbox
              size={25}
              fillColor={Colors.AppBlue1}
              //   text="Custom Checkbox"
              iconStyle={{borderColor: Colors.AppGreen, borderRadius: 4}}
              innerIconStyle={{borderWidth: 1, borderRadius: 4}}
              //   onPress={() => setCheckboxState(!checkboxState)}
            />
            <TextLabel
              label={"I'm intrested in becoming a made "}
              color={Colors.AppBlue1}
              marginTop={20}
              width={'80%'}
            />
          </View>
          <View style={styles.checkboxView}>
            <BouncyCheckbox
              size={25}
              fillColor={Colors.AppBlue1}
              //   text="Custom Checkbox"
              iconStyle={{borderColor: Colors.AppGreen, borderRadius: 4}}
              innerIconStyle={{borderWidth: 1, borderRadius: 4}}
              //   onPress={() => setCheckboxState(!checkboxState)}
            />
            <Text
              style={{
                color: Colors.AppBlue1,
                fontFamily: FontFamily.Poppins_Regular,
                marginTop: verticalScale(12),
                width: '80%',
              }}>
              By siging up, you agree to our{' '}
              <TouchableOpacity>
                <Text
                  style={{
                    fontFamily: FontFamily.Arsenal_Bold,
                    fontSize: moderateScale(15),
                    textDecorationLine: 'underline',
                    textDecorationColor: Colors.AppBlue3,
                    textDecorationStyle: 'double',
                    color: Colors.AppBlue1,
                  }}>
                  terms and conditions
                </Text>
              </TouchableOpacity>
            </Text>
          </View>

          <CustomButton
            text="Next"
            onPress={() => navigation.navigate('UserInfo', {From: 'Signup'})}
            bgColor={Colors.AppGreen}
            marginTop={30}
          />

          {/* <View style={[GlobalStyles.rowFull, GlobalStyles.MarginTop20, GlobalStyles.MarginBottom20]}>
                        <View style={styles.lines} />
                        <TextLabel
                            label={'Or'}
                            fontSize={FontSizes.Small}
                            fontFamily={FontFamily.Poppins_Regular}
                            color={Colors.blackOpacity50}
                        />
                        <View style={styles.lines} />
                    </View> */}

          {/* <SocialLogin /> */}

          <TouchableOpacity
            style={[
              GlobalStyles.rowCenterFull,
              GlobalStyles.MarginTop30,
              GlobalStyles.MarginBottom20,
            ]}
            onPress={() => navigation.navigate('LoginScreen')}>
            <TextLabel
              label={'have an account?'}
              fontSize={FontSizes.Small}
              fontWeight={'400'}
              fontFamily={FontFamily.Poppins_Regular}
              color={Colors.black}
            />
            <TextLabel
              label={' Login'}
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
    paddingBottom: verticalScale(10),
  },
  lines: {
    width: '45%',
    height: verticalScale(1),
    backgroundColor: Colors.blackOpacity50,
  },
  checkboxView: {
    flexDirection: 'row',
    marginTop: verticalScale(22),
  },
  checkbox: {
    alignSelf: 'center',
    borderRadius: 0,

    borderColor: Colors.AppGreen,
    // backgroundColor: Colors.AppGreen,
    tintColor: Colors.AppGreen,
  },
});
