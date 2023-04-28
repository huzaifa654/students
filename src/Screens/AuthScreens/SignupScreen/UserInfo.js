import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import FullScreenBG from '../../../Components/FullScreenBG/FullScreenBG';
import {StarBackground, BlueClearnerLogo} from '../../../Constants/AppImages';
import {verticalScale} from '../../../Utilitis/ResponsiveSizes';
import TextLabel from '../../../Components/TextLabel/TextLable';
import {FontFamily, FontSizes} from '../../../Constants/AppFonts';
import ImageContainer from '../../../Components/ImageConatiner/ImageContainer';
import CustomButton from '../../../Components/CustomButton';
import {useRef} from 'react';
import {accessCamera, accessGallery} from '../../../Utilitis/ImagePicker';

export default function UserInfo() {
  const photo = useRef();
  const [uploading, setUploading] = React.useState(false);
  const [imageModalVisible, setImageModalVisible] = React.useState(false);
  const openCamera = async () => {
    accessCamera().then(response => {
      photo.current = response.assets ? response.assets[0] : undefined;
      // uploadImage();
      setImageModalVisible(false);
    });
  };
  const openGallery = async () => {
    accessGallery().then(response => {
      photo.current = response.assets ? response.assets[0] : undefined;
      setImageModalVisible(false);
    });
  };
  return (
    <FullScreenBG source={StarBackground}>
      <Image
        source={BlueClearnerLogo}
        resizeMode={'contain'}
        style={styles.image}
      />
      <ScrollView>
        <View style={styles.loginView}>
          <TextLabel
            label={'Sumbit your Photo,ID Card!'}
            fontSize={FontSizes.Large}
            fontFamily={FontFamily.Arsenal_Bold}
            marginTop={25}
          />
          <TextLabel
            label={
              'We need to verify your information please sumbit the photo and the ID below to process your application'
            }
            fontSize={FontSizes.Medium}
            //   fontFamily={FontFamily.Arsenal_Bold}
            marginTop={5}
          />
          <ImageContainer
            ImgaeText={'1. Upload Photo'}
            onPress={openCamera}
            imageUrl={photo}
          />
          <ImageContainer
            ImgaeText={'2. Upload Front of ID card'}
            onPress={openCamera}
            imageUrl={photo}
          />
          <ImageContainer
            ImgaeText={'3. Upload Back of ID card'}
            onPress={openCamera}
            imageUrl={photo}
          />
          <CustomButton
            text="Sumbit"
            // onPress={() =>
            //   navigation.navigate('OtpAndVerifyScreen', {
            //     From: 'ForgotPassword',
            //   })
            // }
            bgColor={Colors.AppGreen}
            marginTop={50}
            marginBottom={30}
          />
        </View>
      </ScrollView>
    </FullScreenBG>
  );
}

const styles = StyleSheet.create({
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
});
