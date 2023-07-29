/* eslint-disable prettier/prettier */
import { StyleSheet, FlatList, View, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header/Header'
import axios from 'axios';
import { useIsFocused, useNavigation } from '@react-navigation/native';

import { useSelector } from 'react-redux';
import SemesterCoursesView from '../../Components/SemesterCousesView/SemesterCoursesView';
import { Url } from '../../Constants/AppText';
import { verticalScale } from 'react-native-size-matters';
import TextLabel from '../../Components/TextLabel/TextLable';
import { FontFamily, FontSizes } from '../../Constants/AppFonts'
import AssaignemntView from '../../Components/SemesterCousesView/AssaignemntView';
export default function Assignment() {
    const [cousre, setCousre] = useState([])


    const {
        userDetails
    } = useSelector(state => state.UserDetails);
    console.log(userDetails)

    console.log("userDetails", userDetails)
    const IsFocus = useIsFocused()
    const GetCourses = () => {
        const UserData = {
            semester_no: userDetails[0]?.semester_no,

        }
        console.log(UserData)
        axios.post(`${Url?.BaseUrl}/assignments`, UserData)
            .then(response => {
                console.log('Api hit successfully:', response?.data);
                setCousre(response?.data)
                // Alert.alert('Success', 'User registered successfully');
            })
            .catch(error => {
                // console.error('Failed to hit api:', error);
                // Alert.alert('Error', 'Failed to register user');
            });
    };
    useEffect(() => {

        GetCourses()

    }, [IsFocus])
    const renderItem = ({ item }) => (
        <AssaignemntView item={item} date={new Date(item?.announced_date)} due={new Date(item?.due_date)} />
    );
    return (
        <View style={styles.container}>
            <Header label={"Assignments"} />
            <ScrollView>

                <TextLabel label={`Hey ${userDetails[0]?.last_name} your semester assignemnts are here !!`} alignSelf={"center"} marginTop={12} fontFamily={FontFamily.Arsenal_Bold} fontWeight={"bold"} width={"95%"} textAlign={"center"} fontSize={FontSizes.LargeMedium} />
                <FlatList
                    data={cousre}
                    contentContainerStyle={{ alignItems: "center", marginTop: verticalScale(5) }}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ecf3fe',
    },
})