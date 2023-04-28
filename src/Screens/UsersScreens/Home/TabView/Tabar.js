import React, {useCallback, version} from 'react';
import {
  View,
  StyleSheet,
  useWindowDimensions,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import {TabBar} from 'react-native-tab-view';
import {FontFamily, FontSizes} from '../../../../Constants/AppFonts';
import Colors from '../../../../Utilitis/Colors';
import {
  scale,
  textScale,
  verticalScale,
} from '../../../../Utilitis/ResponsiveSizes';

export const RenderTabBar = props => {
  const width = Dimensions.get('screen').width;

  return (
    <View
      style={{
        flexDirection: 'row',
        // justifyContent: 'flex-start',
        justifyContent: 'center',
        elevation: 0,
        marginTop: verticalScale(12),
        // borderBottomWidth: 1,
        // borderBottomColor: 'gray',
        // marginHorizontal: 24,
        // borderBottomStartRadius: 22,
      }}>
      <TabBar
        {...props}
        indicatorStyle={{
          backgroundColor: Colors.AppYellow,
          height: verticalScale(5),
          width: scale(90),
          //   position: 'absolute',
          //   elevation: 0,
          alignItems: 'center',
          marginLeft: scale(22),

          //   borderBottomWidth: 1,
        }}
        labelStyle={{
          //   fontSize: textScale(FontSizes.Large),
          fontFamily: FontFamily.Arsenal_Bold,
          //   alignItems: 'center',
          justifyContent: 'space-between',
        }}
        style={{
          backgroundColor: 'transparent',
          elevation: 0,
          //   paddingTop: 25,
        }}
        activeColor={Colors.AppBlue2}
        inactiveColor={'gray'}
        tabStyle={{
          width: width * 0.35,
          //   paddingLeft: 'auto',
        }}
        // bounces={true}
        scrollEnabled={true}
      />
    </View>
  );
};
