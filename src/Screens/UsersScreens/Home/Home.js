/* eslint-disable prettier/prettier */
import {Image, StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import TextLabel from '../../../Components/TextLabel/TextLable';
import {FontSizes} from '../../../Constants/AppFonts';
import {verticalScale} from '../../../Utilitis/ResponsiveSizes';
import StudentsData from '../../../Components/StudentsData/StudentsData';
import {ubitLogo} from '../../../Constants/AppImages';
import {scale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={ubitLogo} resizeMode="contain" style={styles.img} />

      {/* <TextLabel
        label={'Welcome to the UBIT students potral'}
        textAlign={'center'}
        fontWeight={'bold'}
        fontSize={FontSizes.ExtraLarge}
        marginTop={verticalScale(25)}
        width={'95%'}
      /> */}
      <ScrollView style={{}}>
        <StudentsData
          onPress={() => {
            navigation.navigate('Profile');
          }}
        />
        <StudentsData />
        <StudentsData />
        <StudentsData />
        <StudentsData />
        <StudentsData />
        <StudentsData />
        <StudentsData marginBottom={true} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf3fe',
  },
  img: {
    width: scale(105),
    height: verticalScale(105),
    alignSelf: 'center',
    marginTop: verticalScale(35),
  },
});
