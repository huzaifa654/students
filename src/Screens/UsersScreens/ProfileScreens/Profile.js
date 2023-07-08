/* eslint-disable prettier/prettier */
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ProfileView from '../../../Components/ProfileView/ProfileView';
import TextLabel from '../../../Components/TextLabel/TextLable';
import { FontSizes } from '../../../Constants/AppFonts';
import GPAView from '../../../Components/GPAView/GPAView';
import SemesterCoursesView from '../../../Components/SemesterCousesView/SemesterCoursesView';
import { semester } from '../../../Constants/AppImages';

export default function Profile({ route }) {
  const { firstName: firstName,
    LastName,
    seatNo,
    Semester,
    SemesterGpa,
    GPA } = route.params
  return (
    <View style={styles.container}>
      <ScrollView style={{ marginBottom: 22 }}>
        <ProfileView name={`${firstName + LastName}`} seatNo={seatNo} Semester={Semester} GPA={GPA} SemesterGpa={SemesterGpa} />

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
            <GPAView semesterGPA={SemesterGpa} />
          </View>
          <View>
            <TextLabel
              label={'Overall GPA'}
              marginTop={24}
              // marginLeft={25}
              fontSize={FontSizes.LargeMedium}
              fontWeight={'bold'}
            />
            <GPAView overallGPA={GPA} />
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
