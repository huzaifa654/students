import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {FontFamily, FontSizes} from '../../Constants/AppFonts';
import {
  BackIcon,
  LoaderImage,
  NavIcon,
  ProfileImage,
  StarImage,
  NotificationMessage,
} from '../../Constants/AppImages';
import {scale, textScale, verticalScale} from '../../Utilitis/ResponsiveSizes';
import TextLabel from '../TextLabel/TextLable';
import Colors from '../../Utilitis/Colors';

function NotificationHeader({onPress}) {
  return (
    <View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        {/* <TouchableOpacity style={styles.BackIconConatiner}> */}
        <Image
          source={BackIcon}
          resizeMode={'contain'}
          style={styles.navIcon}
        />
        {/* </TouchableOpacity> */}

        <TextLabel
          label={'Notification'}
          textAlign={'center'}
          fontSize={textScale(FontSizes.Large)}
          fontFamily={FontFamily.Arsenal_Bold}
          marginTop={32}
          color={Colors.AppBlue3}
        />

        <Image
          source={NotificationMessage}
          resizeMode={'contain'}
          style={styles.NotificationIcon}
        />
      </View>
    </View>
  );
}

export default NotificationHeader;

const styles = StyleSheet.create({
  image: {
    width: '50%',
    height: verticalScale(100),
    alignSelf: 'center',
    marginTop: verticalScale(12),
  },
  navIcon: {
    width: '30%',
    height: verticalScale(50),
    marginTop: verticalScale(25),
  },
  NotificationIcon: {
    width: '30%',
    height: verticalScale(40),
    marginTop: verticalScale(37),
    marginLeft: scale(-22),
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
