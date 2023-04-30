/* eslint-disable prettier/prettier */
import {Image, StyleSheet} from 'react-native';

import {
  SplashBackGround,
  StarBackground,
  studentImage,
} from '../../Constants/AppImages';
import FullScreenBG from '../../Components/FullScreenBG/FullScreenBG';
import CustomButton from '../../Components/CustomButton/CustomButton';

export default function SplashScreen() {
  return (
    <FullScreenBG
      source={SplashBackGround}
      style={styles.container}></FullScreenBG>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    // backgroundColor: '#d4c1ab',
    // backgroundColor: 'transparent',\
    backgroundColor: '#ecf3fe',
  },
});
