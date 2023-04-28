import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {FontFamily, FontSizes} from '../../Constants/AppFonts';

import {scale, textScale, verticalScale} from '../../Utilitis/ResponsiveSizes';
import NotificationHeader from '../../../Components/Header/NotificationHeader';
import FullScreenBG from '../../../Components/FullScreenBG/FullScreenBG';
import {MainScreenBg} from '../../../Constants/AppImages';
import NotificationMessage from '../../../Components/NotificationMessage/NotificationMessage';

export default function Notification() {
  return (
    <FullScreenBG source={MainScreenBg}>
      <NotificationHeader />
      <View style={{marginTop: 80}}>
        <NotificationMessage />
        <NotificationMessage />
      </View>
    </FullScreenBG>
  );
}

const styles = StyleSheet.create({});
