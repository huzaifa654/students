// /* eslint-disable prettier/prettier */
// import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
// import React, { useEffect, useState } from 'react';
// import ProfileView from '../../../Components/ProfileView/ProfileView';
// import TextLabel from '../../../Components/TextLabel/TextLable';
// import { FontSizes } from '../../../Constants/AppFonts';
// import GPAView from '../../../Components/GPAView/GPAView';
// import SemesterCoursesView from '../../../Components/SemesterCousesView/SemesterCoursesView';
// import { semester } from '../../../Constants/AppImages';
// import { useSelector } from 'react-redux';
// import axios from 'axios';
// import { Url } from '../../../Constants/AppText';
// import { useIsFocused, useNavigation } from '@react-navigation/native';
// import SkillCourseView from '../../../Components/SemesterCousesView/SkillCourseView';
// import AssaignemntView from '../../../Components/SemesterCousesView/AssaignemntView';
// import Semester from '../../../Components/SemesterCousesView/Semester';

// export default function Profile({ }) {
//   const navigation = useNavigation()
//   const [cousre, setCousre] = useState([])
//   const [skills, setSkills] = useState([])

//   console.log("cousre==", cousre)
//   const {
//     userDetails
//   } = useSelector(state => state.UserDetails);
//   console.log(userDetails[0]?.cgpa)

//   console.log("userDetails", userDetails)
//   const IsFocus = useIsFocused()
//   const GetCourses = () => {
//     const UserData = {
//       semester_no: userDetails[0]?.semester_no,

//     }
//     console.log(UserData)
//     axios.post(`${Url?.BaseUrl}/Cousrses`, UserData)
//       .then(response => {
//         console.log('Api hit successfully:', response?.data);
//         setCousre(response?.data)
//         // Alert.alert('Success', 'User registered successfully');
//       })
//       .catch(error => {
//         // console.error('Failed to hit api:', error);
//         // Alert.alert('Error', 'Failed to register user');
//       });
//   };
//   const GetkillCourses = () => {
//     const UserData = {
//       seat_no: userDetails[0]?.seat_no,

//     }
//     console.log(UserData)
//     axios.post(`${Url?.BaseUrl}/GetSkills`, UserData)
//       .then(response => {
//         console.log('Skills========>>>>>>', response?.data);
//         setSkills(response?.data)

//       })
//       .catch(error => {
//         // console.error('Failed to hit api:', error);
//         // Alert.alert('Error', 'Failed to register user');
//       });
//   };
//   useEffect(() => {

//     GetCourses()
//     GetkillCourses()
//   }, [IsFocus])

//   const renderItem = ({ item }) => (
//     <SemesterCoursesView item={item} />
//   );
//   return (
//     <View style={styles.container}>
//       <ProfileView name={`${userDetails[0]?.first_name} ${userDetails[0]?.last_name}`} seatNo={userDetails[0]?.seat_no} Semester={userDetails[0]?.semester_no} GPA={"GPA"} SemesterGpa={userDetails[0]?.semester_gpa} />
//       <ScrollView style={{ marginBottom: 22 }}>

//         <View
//           style={{
//             flexDirection: 'row',
//             justifyContent: 'space-between',
//             marginHorizontal: 12,
//           }}>
//           <View>
//             <TextLabel
//               label={'Semester GPA'}
//               marginTop={24}
//               marginLeft={10}
//               fontSize={FontSizes.LargeMedium}
//               fontWeight={'bold'}
//             />
//             <GPAView semesterGPA={userDetails[0]?.semester_gpa} />
//           </View>
//           <View>
//             <TextLabel
//               label={'Overall GPA'}
//               marginTop={24}
//               // marginLeft={25}
//               fontSize={FontSizes.LargeMedium}
//               fontWeight={'bold'}
//             />
//             <GPAView overallGPA={userDetails[0]?.cgpa} />
//           </View>
//         </View>
//         {/* <TextLabel
//           label={'Semester Courses'}
//           marginTop={12}
//           marginLeft={18}
//           fontSize={FontSizes.LargeMedium}
//           fontWeight={'bold'}
//         /> */}
//         <Semester text={"Semester Courses"} onPress={() => navigation.navigate("Semester")} />

//         {/* <FlatList
//           data={cousre}
//           renderItem={renderItem}
//           keyExtractor={(item) => item.id}
//         /> */}
//         <Semester text={"Assingements"} onPress={() => navigation.navigate("Assignment")} />
//         <Semester text={"Skill Courses"} onPress={() => navigation.navigate("Skill")} />

//         {/* <TextLabel
//           label={'Assingements'}
//           marginTop={12}
//           marginLeft={18}
//           fontSize={FontSizes.LargeMedium}
//           fontWeight={'bold'}
//         />
//         <AssaignemntView /> */}
//         {/* 
//         <TextLabel
//           label={'Skill Courses'}
//           marginTop={12}
//           marginLeft={18}
//           fontSize={FontSizes.LargeMedium}
//           fontWeight={'bold'}
//         />
//         <SkillCourseView skill={skills[0]?.c_name} /> */}


//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#ecf3fe',
//   },
// });


import { FlatList, ScrollView, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Colors from '../../../Utilitis/Colors'
import ProfileView from '../../../Components/ProfileView/ProfileView'
import SemesterConatiner from '../../../Components/SemesterConatiner/SemesterConatiner'
import SemesterCoucesContainer from '../../../Components/SemesterCoucesContainer/SemesterCoucesContainer'
import { scale, verticalScale } from 'react-native-size-matters'
import TextLabel from '../../../Components/TextLabel/TextLable'
import { useSelector } from 'react-redux'
import { useIsFocused } from '@react-navigation/native'
import axios from 'axios'
import { Url } from '../../../Constants/AppText'
import Loader from '../../../Components/Loader/Loader'

export default function Profile() {
  const [courses, setCourses] = useState([])
  const [load, setLoad] = useState(false)
  const COURSES = [
    courses[0]?.Course1,
    courses[0]?.Course2,
    courses[0]?.Course3,
    courses[0]?.Course4,
    courses[0]?.Course5,
    courses[0]?.Course6,

  ]
  const { userDetails } = useSelector(state => state.UserDetails);
  const userInfo = userDetails?.UserResponse[0]
  const Focus = useIsFocused()
  console.log("Courses--------------------", courses[0]?.Course1)
  const GetSemCourses = () => {
    setLoad(true)
    const UserData = {
      SemesterNo: userInfo?.semester,

    }
    console.log(UserData)
    axios.post(`${Url?.BaseUrl}/getCourses`, UserData)
      .then(response => {
        setLoad(false)

        console.log('setCourses========>>>>>>', JSON.stringify(response?.data)?.length);
        setCourses(response?.data?.data)

      })
      .catch(error => {
        setLoad(false)
        console.error('Failed to hit api:', error);
        // Alert.alert('Error', 'Failed to register user');
      });
  };
  const renderItem = (item) => {
    console.log("item---", JSON.stringify(item?.item))
    return (
      <SemesterCoucesContainer item={item?.item} index={item?.index} />

    )
  }
  useEffect(() => {

    GetSemCourses()
  }, [Focus])
  return (
    <View style={styles?.container}>
      <ProfileView name={`${userInfo?.firstName} ${userInfo?.lastName}`} id={userInfo?.seatNo} Semester={userInfo?.semester} />
      <SemesterConatiner semGPA={userInfo?.semesterGPA} CGPA={userInfo?.overAllGPA} />
      <TextLabel label={"Semester Courses"} fontWeight={"700"} marginLeft={scale(15)} marginTop={verticalScale(15)} />
      {courses[0]?.Course1 == undefined ?
        <></> :
        <FlatList
          data={COURSES}
          renderItem={renderItem}
          style={{ marginTop: verticalScale(8) }}
        />}

      {load && <Loader />}

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors?.white,
    flex: 1
  },


})