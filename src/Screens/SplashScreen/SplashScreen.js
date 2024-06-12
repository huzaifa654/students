/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { Image, StyleSheet, View } from 'react-native';

import {
  KuLogo,
  SplashBackGround,
  StarBackground,
  studentImage,
} from '../../Constants/AppImages';
import FullScreenBG from '../../Components/FullScreenBG/FullScreenBG';
import CustomButton from '../../Components/CustomButton/CustomButton';
import TextLabel from '../../Components/TextLabel/TextLable';
import { FontSizes } from '../../Constants/AppFonts';
import { scale, verticalScale } from 'react-native-size-matters';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

export default function SplashScreen() {
  const [SplashShow, SetSplashShow] = useState(true);

  const {
    userDetails
  } = useSelector(state => state.UserDetails);
  console.log(JSON.stringify(userDetails) == "{}")
  const navigation = useNavigation()
  useEffect(() => {
    setTimeout(() => {
      JSON.stringify(userDetails) == "{}" ? navigation.replace("LoginScreen") : navigation.replace("Profile")

    }, 1500);
  }, []);
  return (
    <View style={styles.container}>
      <TextLabel
        label={'Welcome To The UBIT Students Potral'}
        textAlign={'center'}
        fontWeight={'bold'}
        fontSize={FontSizes.ExtraLarge}
        marginTop={verticalScale(55)}
        width={'97%'}
      // marginHorizental={scale(5)}
      />
      <Image
        source={KuLogo}
        style={{
          width: 155,
          height: 155,
          alignSelf: 'center',
          marginTop: verticalScale(55),
        }}
        resizeMode="contain"
      />
      <Image
        source={SplashBackGround}
        style={{ width: '100%', height: verticalScale(420) }}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#d4c1ab',
    // backgroundColor: 'transparent',\
    backgroundColor: '#ecf3fe',
  },
});
