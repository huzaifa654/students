import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../../Components/Header/Header'
import { scale, verticalScale } from 'react-native-size-matters'
import TextLabel from '../../../Components/TextLabel/TextLable'
import { FontSizes } from '../../../Constants/AppFonts'
import Colors from '../../../Utilitis/Colors'
import Lecture from './Lecture'
import { useSelector } from 'react-redux'
import Loader from '../../../Components/Loader/Loader'
import axios from 'axios'
import { Url } from '../../../Constants/AppText'
import { useIsFocused } from '@react-navigation/native'

const Days = ({ day, marginLeft, marginRight, activeTab, setActiveTab }) => {
    return (
        <TouchableOpacity onPress={() => { setActiveTab(day) }}>
            <TextLabel label={day} fontWeight={"bold"} color={activeTab == day ? Colors?.black : Colors?.white} marginLeft={marginLeft} marginRight={marginRight} />
        </TouchableOpacity>
    )

}

export default function TimeTable() {
    const [activeTab, setActiveTab] = useState('Mon')
    const [load, setLoad] = useState(false);
    const [courses, setCourses] = useState([])
    const filteredData = courses.filter(item => item.Day === activeTab);
    console.log("filteredData", filteredData)
    const focus = useIsFocused()
    const { userDetails } = useSelector(state => state.UserDetails);
    const userInfo = userDetails?.UserResponse[0]

    const getTimeTableCourses = () => {
        setLoad(true)
        const UserData = {
            SemesterNo: userInfo?.semester,
        }
        console.log(UserData)
        axios.post(`${Url?.BaseUrl}/getTimeTableCourses`, UserData)
            .then(response => {
                setLoad(false)
                console.log("response?.message", response)
                setCourses(response?.data?.data)

            })
            .catch(error => {
                setLoad(false)
                console.error('Failed to hit api:', error);
                // Alert.alert('Error', 'Failed to register user');
            });
    };
    useEffect(() => {
        getTimeTableCourses()
    }, [])

    const renderItem = ({ item }) => {
        return (
            <Lecture item={item} />
        )
    }
    return (
        <View style={styles?.container}>
            <Header label={"Time Table"} />
            <View style={styles?.row}>
                <Image source={require("../../../Assets/calendar.png")} resizeMode='contain' style={styles?.calander} />
                <TextLabel label={"My Time Table"} fontSize={FontSizes?.LargeMedium} fontWeight={"bold"} marginLeft={scale(15)} alignSelf={"center"} />
            </View>

            <View style={styles?.daysContainer}>
                <Days day={"Mon"} marginLeft={scale(15)} activeTab={activeTab} setActiveTab={setActiveTab} />
                <Days day={"Tue"} activeTab={activeTab} setActiveTab={setActiveTab} />
                <Days day={"Wed"} activeTab={activeTab} setActiveTab={setActiveTab} />
                <Days day={"Thurs"} activeTab={activeTab} setActiveTab={setActiveTab} />
                <Days day={"Fri"} marginRight={scale(15)} activeTab={activeTab} setActiveTab={setActiveTab} />
            </View>
                <FlatList
                    data={filteredData}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}

                />
            
            {/* <Lecture /> */}
            {load && <Loader />}

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    row: {
        flexDirection: "row",
        marginLeft: scale(15),
        marginTop: verticalScale(20)

    },
    calander: {
        width: scale(30),
        height: verticalScale(30)
    },
    daysContainer: {
        backgroundColor: Colors?.Blue,
        padding: 25,
        marginTop: verticalScale(25),
        width: "90%",
        alignSelf: "center",
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",

    }
})