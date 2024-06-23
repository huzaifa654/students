/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import { StyleSheet, FlatList, View, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header/Header'
import axios from 'axios';
import { useIsFocused, useNavigation } from '@react-navigation/native';

import { useSelector } from 'react-redux';
import SemesterCoursesView from '../../Components/SemesterCousesView/SemesterCoursesView';
import { Url } from '../../Constants/AppText';
import { scale, verticalScale } from 'react-native-size-matters';
import TextLabel from '../../Components/TextLabel/TextLable';
import { FontFamily, FontSizes } from '../../Constants/AppFonts'
import AssaignemntView from '../../Components/SemesterCousesView/AssaignemntView';
import SkillCourseView from '../../Components/SemesterCousesView/SkillCourseView';
import Lottie from 'lottie-react-native';

export default function SkillDeatil() {
    const [skills, setSkills] = useState([])


    const { userDetails } = useSelector(state => state.UserDetails);
    const userinfo = userDetails?.UserResponse[0]
    console.log("userDetails", userDetails)

    return (
        <View style={styles.container}>
            <Header label={"Skill Courses"} />
            <ScrollView>
                <TextLabel label={`Hey ${userinfo?.lastName} your Skill Courses are here !!`} alignSelf={"center"} marginTop={12} fontFamily={FontFamily.Arsenal_Bold} fontWeight={"bold"} width={"95%"} textAlign={"center"} fontSize={FontSizes.LargeMedium} />
                <SkillCourseView skill={userinfo?.skilledCourses} />
                <Lottie style={styles.lottie}
                    source={require('../../Animation/ss.json')}
                    autoPlay
                    speed={0.5}
                    loop={true} />

            </ScrollView>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ecf3fe',
    },
    lottie: {
        height: verticalScale(300),
        width: scale(300),
        alignItems: "center",
        alignSelf: "center",
        marginTop: verticalScale(25)




    }
})