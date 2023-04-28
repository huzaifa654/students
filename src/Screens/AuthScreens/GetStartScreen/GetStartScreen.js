import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, View, Image} from 'react-native';

import {
  AppTransparentSquareLogo,
  StarBackground,
  CleanersImage,
} from '../../../Constants/AppImages';
import FullScreenBG from '../../../Components/FullScreenBG/FullScreenBG';
import CustomButton from '../../../Components/CustomButton';
import Colors from '../../../Utilitis/Colors';
import {height, verticalScale, width} from '../../../Utilitis/ResponsiveSizes';
import TextLabel from '../../../Components/TextLabel/TextLable';
import {FontFamily} from '../../../Constants/AppFonts';

export default function GetStartScreen() {
  const navigation = useNavigation();

  return (
    <FullScreenBG
      source={StarBackground}
      style={styles.container}
      resizeMode={'stretch'}>
      <Image
        source={AppTransparentSquareLogo}
        resizeMode={'contain'}
        style={styles.image}
      />
      <Image
        source={CleanersImage}
        resizeMode={'contain'}
        style={styles.CleanersImage}
      />
      <TextLabel
        textAlign={'center'}
        label={'Interested in becoming part of our team?'}
        width={'80%'}
        color={Colors.AppBlue2}
        fontFamily={FontFamily.Arsenal_Bold}
        fontSize={22}
        marginTop={-22}
      />

      <TextLabel
        textAlign={'center'}
        label={
          'text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a '
        }
        width={'88%'}
        color={Colors.AppBlue2}
        marginTop={12}
      />
      <TextLabel
        textAlign={'center'}
        label={'text ever since the 1500s, when an unknown printer took  '}
        width={'88%'}
        color={Colors.AppBlue2}
        marginTop={12}
        marginBottom={13}
      />
      {/* <View style={styles.Btn}> */}
      <CustomButton
        text="Get Started"
        onPress={() => navigation.navigate('LoginScreen')}
        bgColor={Colors.AppGreen}
      />
      {/* </View> */}
    </FullScreenBG>
  );
}

const styles = StyleSheet.create({
  container: {
    height: height - 20,
    alignSelf: 'center',
    width: width,
    backgroundColor: '#F8F9F9',
    alignItems: 'center',
  },

  Btn: {
    // // position: 'absolute',
    // width: '100%',
    // bottom: '25%',
  },
  image: {
    width: '50%',
    height: verticalScale(100),
    alignSelf: 'center',
    marginTop: verticalScale(32),
  },
  CleanersImage: {
    width: '80%',
    height: verticalScale(200),
    alignSelf: 'center',
    marginTop: verticalScale(72),
    marginBottom: verticalScale(45),
  },
});
