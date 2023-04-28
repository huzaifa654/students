import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {moderateScale, verticalScale} from '../../Utilitis/ResponsiveSizes';
import TextLabel from '../TextLabel/TextLable';
import {FontFamily, FontSizes} from '../../Constants/AppFonts';
import Colors from '../../Utilitis/Colors';
import GlobalStyles from '../../Utilitis/GlobalStyles';
import {UploadImgaeIcon} from '../../Constants/AppImages';
import CustomButton from '../CustomButton';

export default function ImageContainer({ImgaeText, onPress, photo: imageUrl}) {
  console.log(imageUrl);
  return (
    <View style={styles.container}>
      <TextLabel
        label={ImgaeText}
        fontSize={FontSizes.Large}
        fontFamily={FontFamily.Arsenal_Bold}
        marginTop={25}
      />
      {!imageUrl?.current ? (
        <>
          <View style={[styles.imadeView, GlobalStyles.Shadow2]}>
            <TouchableOpacity onPress={onPress}>
              <Image
                source={UploadImgaeIcon}
                resizeMode={'contain'}
                style={styles.image}
              />
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <Image
          source={{uri: imageUrl.current.uri}}
          style={styles.uploadImage}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: verticalScale(29),
  },
  imadeView: {
    padding: moderateScale(70),
    backgroundColor: Colors.AppLightGreen,
    marginTop: verticalScale(19),
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: Colors.AppGreen,
    shadowColor: Colors.blackOpacity10,
  },
  image: {
    width: '50%',
    height: verticalScale(70),
    alignSelf: 'center',
  },
  uploadImage: {
    width: '50%',
    height: verticalScale(70),
    alignSelf: 'center',
  },
});
