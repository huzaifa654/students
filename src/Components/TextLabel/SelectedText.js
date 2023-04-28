import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {scale, verticalScale} from '../../Utilitis/ResponsiveSizes';
import TextLabel from './TextLable';
import {FontFamily, FontSizes} from '../../Constants/AppFonts';
import Colors from '../../Utilitis/Colors';
import {forwardIcon} from '../../Constants/AppImages';

export default function SelectedText({title, subTitle, details}) {
  return (
    <View style={{marginLeft: 53}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: scale(-12),
          marginTop: verticalScale(2),
        }}>
        <View>
          <TextLabel
            label={subTitle}
            fontSize={FontSizes.ExtraSmall}
            //   width={'80%'}
            marginTop={10}
            //   marginLeft={22}
            color={'gray'}
          />
          <TextLabel
            label={title}
            fontFamily={FontFamily.Arsenal_Bold}
            color={details ? 'gray' : Colors.AppBlue3}
            fontSize={details ? 12 : FontSizes.ExtraSmall}
            marginLeft={details ? -2 : 0}
            marginTop={details ? -5 : 0}
            marginBottom={12}

            //   width={'80%'}
            //   marginLeft={22}
            //   marginTop={4}
          />

          {details ? (
            <Image
              source={forwardIcon}
              resizeMode={'contain'}
              style={styles.forwardIcon}
            />
          ) : (
            ''
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  forwardIcon: {
    width: scale(15),
    height: verticalScale(15),
    // position: 'absolute',
    marginTop: verticalScale(-29),
    marginLeft: scale(59),
  },
});
