/* eslint-disable prettier/prettier */
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ProfileView from '../../../Components/ProfileView/ProfileView';
import TextLabel from '../../../Components/TextLabel/TextLable';
import {FontSizes} from '../../../Constants/AppFonts';
import GPAView from '../../../Components/GPAView/GPAView';
import SemesterCoursesView from '../../../Components/SemesterCousesView/SemesterCoursesView';

export default function Profile({}) {
  return (
    <View style={styles.container}>
      <ScrollView style={{marginBottom: 22}}>
        <ProfileView />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 12,
          }}>
          <View>
            <TextLabel
              label={'Semester GPA'}
              marginTop={24}
              marginLeft={10}
              fontSize={FontSizes.LargeMedium}
              fontWeight={'bold'}
            />
            <GPAView semesterGPA={3.84} />
          </View>
          <View>
            <TextLabel
              label={'Overall GPA'}
              marginTop={24}
              // marginLeft={25}
              fontSize={FontSizes.LargeMedium}
              fontWeight={'bold'}
            />
            <GPAView overallGPA={3.42} />
          </View>
        </View>
        <TextLabel
          label={'Semester Courses'}
          marginTop={12}
          marginLeft={18}
          fontSize={FontSizes.LargeMedium}
          fontWeight={'bold'}
        />
        <SemesterCoursesView />
        <SemesterCoursesView />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf3fe',
  },
});
