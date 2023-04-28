import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TextLabel from '../../../Components/TextLabel/TextLable';
import {FontSizes} from '../../../Constants/AppFonts';
import {verticalScale} from '../../../Utilitis/ResponsiveSizes';

export default function Home() {
  return (
    <View style={styles.container}>
      <TextLabel
        label={'Welcome to the UBIT students potral'}
        textAlign={'center'}
        fontWeight={'bold'}
        fontSize={FontSizes.ExtraLarge}
        marginTop={verticalScale(55)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf3fe',
  },
});
