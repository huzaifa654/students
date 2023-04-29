/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, StyleSheet} from 'react-native';

import {StarBackground, studentImage} from '../../Constants/AppImages';
import FullScreenBG from '../../Components/FullScreenBG/FullScreenBG';
import CustomButton from '../../Components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';

export default function WelcomeScreen() {
  const navigation = useNavigation();
  return (
    <FullScreenBG source={StarBackground} style={styles.container}>
      {/* <Image
        source={AppTransparentSquareLogo}
        resizeMode={'contain'}
        style={styles.image}
      /> */}
      <CustomButton
        bgColor={'white'}
        marginTop={580}
        text={'Get Started'}
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
    </FullScreenBG>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'blue',
  },
  image: {
    width: '80%',
    height: '60%',
    alignSelf: 'center',
  },
});
