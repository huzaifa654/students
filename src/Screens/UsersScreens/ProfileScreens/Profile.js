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