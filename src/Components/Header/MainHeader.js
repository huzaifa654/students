import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import TextLabel from '../TextLabel/TextLable';
import {FontFamily, FontSizes} from '../../Constants/AppFonts';
import {
  BlueClearnerLogo,
  LoaderImage,
  NavIcon,
  ProfileImage,
  StarImage,
  NotoficationIcon,
} from '../../Constants/AppImages';
import {scale, textScale, verticalScale} from '../../Utilitis/ResponsiveSizes';

function MainHeader({onPress}) {
  return (
    <View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Image source={NavIcon} resizeMode={'contain'} style={styles.navIcon} />

        <Image
          source={BlueClearnerLogo}
          resizeMode={'contain'}
          style={styles.image}
        />
        <TouchableOpacity
          style={styles.NotificationContainer}
          onPress={onPress}>
          <Image
            source={NotoficationIcon}
            resizeMode={'contain'}
            style={styles.NotificationIcon}
          />
        </TouchableOpacity>
      </View>
      <View style={{alignItems: 'center'}}>
        <TextLabel
          label={'Complete your profile 80%'}
          textAlign={'center'}
          color={'gray'}
          marginTop={12}
          fontSize={15}
        />
        <Image
          source={LoaderImage}
          resizeMode={'contain'}
          style={styles.LoaderImage}
        />
        <View style={{flexDirection: 'row'}}>
          <Image
            source={ProfileImage}
            resizeMode={'contain'}
            style={styles.ProfileImage}
          />
          <View>
            <TextLabel
              label={'Samnta Jhon'}
              fontSize={textScale(FontSizes.Large)}
              fontFamily={FontFamily.Arsenal_Bold}
              color={'gray'}
            />
            <View style={{flexDirection: 'row', marginLeft: scale(-12)}}>
              <Image
                source={StarImage}
                resizeMode={'contain'}
                style={styles.StarImage}
              />
              <TextLabel
                label={4.5}
                textAlign={'center'}
                color={'gray'}
                fontFamily={FontFamily.Arsenal_Bold}
                marginTop={-5}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default MainHeader;

const styles = StyleSheet.create({
  image: {
    width: '50%',
    height: verticalScale(100),
    alignSelf: 'center',
    marginTop: verticalScale(12),
  },
  navIcon: {
    width: '30%',
    height: verticalScale(20),
    marginTop: verticalScale(45),
  },
  NotificationIcon: {
    width: '30%',
    height: verticalScale(40),
    marginTop: verticalScale(37),
    // marginLeft: scale(-22),
  },
  LoaderImage: {
    width: '25%',
    height: verticalScale(30),
    alignSelf: 'flex-start',
    marginLeft: scale(99),
    marginTop: verticalScale(-9),
  },
  ProfileImage: {
    width: '30%',
    height: verticalScale(80),
    alignSelf: 'flex-start',

    marginLeft: scale(-155),
    marginTop: verticalScale(-12),
  },
  StarImage: {
    width: '25%',
    height: verticalScale(20),
    alignSelf: 'flex-start',
    // marginLeft: scale(99),
    // marginTop: verticalScale(-9),
  },
  NotificationContainer: {
    width: '30%',
    // height: verticalScale(40),
    // marginTop: verticalScale(37),
    // marginLeft: scale(22),
  },
});
