import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import TextLabel from '../TextLabel/TextLable';
import {scale, verticalScale} from '../../Utilitis/ResponsiveSizes';
import {CleanerLogo, MapMarkerIcon} from '../../Constants/AppImages';
import {FontFamily, FontSizes} from '../../Constants/AppFonts';
import Colors from '../../Utilitis/Colors';
import SelectedText from '../TextLabel/SelectedText';

export default function NotificationMessage() {
  return (
    <View style={{borderBottomWidth: 0.5, color: 'gray'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: scale(22),
          marginTop: verticalScale(15),
        }}>
        <TextLabel label={'Job ID # b2656'} color={'gray'} fontSize={16} />
        <TextLabel label={'Just now'} color={'gray'} fontSize={16} />
      </View>
      <View style={{flexDirection: 'row', marginTop: verticalScale(2)}}>
        <Image
          source={CleanerLogo}
          resizeMode={'contain'}
          style={styles.image}
        />
        <View style={{marginTop: verticalScale(22), marginLeft: -3}}>
          <TextLabel
            label={'You are assinged to basic clean service'}
            fontFamily={FontFamily.Arsenal_Bold}
            color={Colors.AppBlue2}
            fontSize={16}
            width={'80%'}
            // marginLeft={22}
            marginTop={4}
          />
          <View
            style={{
              borderBottomWidth: 0.8,
              borderBottomColor: Colors.AppBlue1,
              //   marginHorizontal: scale(12),
              //   width: '90%',
              //   marginLeft: scale(12),
              //   marginRight: scale(92),
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={MapMarkerIcon}
                resizeMode={'contain'}
                style={styles.Mapmaker}
              />
              <TextLabel
                label={'123 Main street,unit 21 New York  1001'}
                fontSize={11}
                width={'80%'}
                marginTop={4}
                color={'gray'}
                marginLeft={4}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={{flexDirection: 'row', marginLeft: scale(22)}}>
        <SelectedText
          subTitle={'start cleaning time slot'}
          title={'11am to 01pm'}
        />
        <SelectedText subTitle={'job Duration'} title={'2 hours'} />
        <SelectedText title={'View Details'} details={true} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '20%',
    height: verticalScale(50),
    alignSelf: 'center',
    marginTop: verticalScale(20),
    marginLeft: scale(2),
    // position: 'absolute',
  },
  Mapmaker: {
    width: '3%',
    height: verticalScale(15),
    // alignSelf: 'center',
    // top: verticalScale(22),
    // marginLeft: scale(2),
    // backgroundColor: 'blue',
    marginRight: scale(2),
    marginTop: verticalScale(2),
    tintColor: Colors.AppBlue1,
  },
});
