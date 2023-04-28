import React, {useState, useRef, useEffect} from 'react';
import {
  Image,
  StyleSheet,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

import {
  StarBackground,
  AppTransparentSquareLogo,
  OtpIcons,
} from '../../../Constants/AppImages';
import FullScreenBG from '../../../Components/FullScreenBG/FullScreenBG';
import TextLabel from '../../../Components/TextLabel/TextLable';
import {FontFamily, FontSizes} from '../../../Constants/AppFonts';
import {moderateScale, verticalScale} from '../../../Utilitis/ResponsiveSizes';
import CustomButton from '../../../Components/CustomButton';
import Colors from '../../../Utilitis/Colors';
import GlobalStyles from '../../../Utilitis/GlobalStyles';
import CustomModal from '../../../Components/Modals/CustomModal';
import ModalPattern1 from '../../../Components/Modals/ModalPatterns/ModalPattern1';

export default function OtpAndVerifyScreen() {
  const Route = useRoute();
  const RouteFrom = Route?.params?.From;
  const navigation = useNavigation();

  const Ref1 = useRef(null);
  const Ref2 = useRef(null);
  const Ref3 = useRef(null);
  const Ref4 = useRef(null);

  const [SignupModal, setSignupModa] = useState(false);
  const [intervalSeconds, setIntervalSeconds] = useState(60);
  const [intervalID, setIntervalID] = useState(0);
  const [val1, setVal1] = useState('');
  const [val2, setVal2] = useState('');
  const [val3, setVal3] = useState('');
  const [val4, setVal4] = useState('');

  const onChangeOTPText = (
    newValue,
    setValue,
    previousTextInputRef,
    nextTextInputRef,
  ) => {
    if (newValue) {
      setValue(newValue);
      nextTextInputRef?.current?.focus();
    } else {
      setValue(newValue);
      previousTextInputRef?.current?.focus();
    }
  };

  const navigate = () => {
    if (RouteFrom == 'ForgotPassword') {
      navigation.navigate('NewPassword');
    } else {
      setSignupModa(true);
    }
  };

  const startTimer = () => {
    const _intervalID = setInterval(() => {
      setIntervalSeconds(previousValue => {
        return previousValue - 1;
      });
    }, 1000);
    setIntervalID(_intervalID);
  };

  const resendOTP = () => {
    setIntervalSeconds(60);
  };

  useEffect(() => {
    return () => {
      if (intervalID) {
        clearInterval(intervalID);
      }
    };
  }, []);

  useEffect(() => {
    if (intervalSeconds < 1 && intervalID) {
      clearInterval(intervalID);
      setIntervalID(0);
    } else if (intervalSeconds > 1 && intervalID == 0) {
      startTimer();
    }
  }, [intervalSeconds]);

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
            label={'Please Enter the'}
            fontSize={FontSizes.Large}
            fontFamily={FontFamily.Arsenal_Bold}
            marginTop={25}
          />
          <TextLabel
            label={'OTP  Sent to +85 3274 3422'}
            fontSize={FontSizes.Large}
            fontFamily={FontFamily.Arsenal_Bold}
            // marginTop={25}
          />

          <Image
            source={OtpIcons}
            resizeMode={'contain'}
            style={styles.PasswordAuthIcon}
          />

          <View style={GlobalStyles.rowCenterFull}>
            <TextInput
              style={[styles.box, GlobalStyles.Shadow4]}
              maxLength={1}
              keyboardType={'number-pad'}
              ref={Ref1}
              onChangeText={newValue =>
                onChangeOTPText(newValue, setVal1, null, Ref2)
              }
            />
            <TextInput
              style={[styles.box, GlobalStyles.Shadow4]}
              maxLength={1}
              ref={Ref2}
              keyboardType={'number-pad'}
              onChangeText={newValue =>
                onChangeOTPText(newValue, setVal2, Ref1, Ref3)
              }
            />
            <TextInput
              style={[styles.box, GlobalStyles.Shadow4]}
              maxLength={1}
              keyboardType={'number-pad'}
              ref={Ref3}
              onChangeText={newValue =>
                onChangeOTPText(newValue, setVal3, Ref2, Ref4)
              }
            />
            <TextInput
              style={[styles.box, GlobalStyles.Shadow4]}
              maxLength={1}
              keyboardType={'number-pad'}
              ref={Ref4}
              onChangeText={newValue =>
                onChangeOTPText(newValue, setVal4, Ref3, null)
              }
            />
          </View>

          {intervalSeconds > 0 ? (
            <TextLabel
              label={`Don't receive an OTP? Please wait ${intervalSeconds} `}
              fontSize={FontSizes.Small}
              fontFamily={FontFamily.Poppins_Regular}
              color={Colors.blackOpacity50}
              alignSelf={'center'}
              textAlign={'center'}
              marginTop={30}
            />
          ) : (
            <TouchableOpacity
              style={[GlobalStyles.rowCenterFull, GlobalStyles.MarginTop30]}
              onPress={() => resendOTP()}>
              <TextLabel
                label={"Don't receive an OTP?"}
                fontSize={FontSizes.Small}
                fontFamily={FontFamily.Poppins_Regular}
                color={Colors.black}
              />
              <TextLabel
                label={' Resend OTP'}
                fontSize={FontSizes.Small}
                fontFamily={FontFamily.Poppins_Regular}
                color={Colors.AppBlue1}
              />
            </TouchableOpacity>
          )}
        </View>
        <CustomModal
          value={SignupModal}
          setValue={setSignupModa}
          HideOnBackDropPress={false}>
          <ModalPattern1
            setValue={setSignupModa}
            msg={'Your account has been created successfully'}
            msg2={'Enjoy your fresh clean home'}
            btnTittle={'Ok'}
            OnPress={() => navigation.navigate('LoginScreen')}
          />
        </CustomModal>
        <CustomButton
          text={RouteFrom == 'ForgotPassword' ? 'Next' : 'Confirm'}
          onPress={() => navigate()}
          bgColor={Colors.AppGreen}
          marginTop={40}
          marginBottom={10}
        />
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
  box: {
    width: moderateScale(60),
    height: verticalScale(60),
    borderRadius: 10,
    margin: 10,
    borderColor: Colors.AppBlue1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: Colors.white,
  },
});
