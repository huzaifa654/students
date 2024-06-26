import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../../../Components/Header/Header'
import Colors from '../../../Utilitis/Colors';
import { scale, verticalScale } from 'react-native-size-matters';
import TextLabel from '../../../Components/TextLabel/TextLable';
import { FontSizes } from '../../../Constants/AppFonts';
import CustomButton from '../../../Components/CustomButton';
import axios from 'axios';
import { Url } from '../../../Constants/AppText';
import { useSelector } from 'react-redux';
import Loader from '../../../Components/Loader/Loader';
import CustomModal from '../../../Components/Modals/CustomModal';
import SuccessModal from '../../../Components/SuccessModal/SuccessModal';

export default function Report() {
    const [report, setReport] = useState();
    const [load, setLoad] = useState(false);
    const [value, setValue] = useState('');
    const [message, setMessage] = useState()

    console.log("report------", report?.length)

    const { userDetails } = useSelector(state => state.UserDetails);
    const userInfo = userDetails?.UserResponse[0]

    const ReportToChairman = () => {
        setLoad(true)
        const UserData = {
            email: userInfo?.email,
            report: report


        }
        console.log(UserData)
        axios.post(`${Url?.BaseUrl}/report`, UserData)
            .then(response => {
                console.log("response?.message", response)
                setLoad(false)
                setMessage("Report Successfully Submiited To Chairman")
                setValue(true)


            })
            .catch(error => {
                setLoad(false)
                console.error('Failed to hit api:', error);
                // Alert.alert('Error', 'Failed to register user');
            });
    };
    return (
        <View style={styles?.container}>
            <Header label={"Report To Chairman"} />
            <ScrollView style={{ marginTop: verticalScale(35), width: "95%", alignSelf: "center" }}>
                <TextLabel label={"Report any issue or feedback"} fontWeight={"bold"} marginLeft={scale(10)} marginBottom={verticalScale(5)} />
                <TextLabel label={"We are here to take query of students"} color={Colors?.Blue} fontSize={FontSizes?.Small} marginLeft={scale(10)} marginTop={verticalScale(2)} marginBottom={verticalScale(2)} />
                <TextInput
                    placeholder='Type a report to chairman'
                    style={styles.input}
                    onChangeText={setReport}
                    value={report}
                    multiline={true}
                    placeholderTextColor={Colors?.blackOpacity25}
                />
                <CustomButton
                    text={"Sumbit"}
                    bgColor={report?.length == 0 ? Colors?.Gray : Colors?.Blue}
                    marginTop={verticalScale(25)} fgColor={Colors?.white} 
                    disabled={report?.length == 0 ? true : false}
                    onPress={() => { ReportToChairman(); setReport('') }}
                />
            </ScrollView>
            {load && <Loader />}
            <CustomModal setValue={setValue} value={value} >
                <SuccessModal setvalue={() => { setValue(false) }} text={message} onPress={() => { setValue(false) }} />
            </CustomModal>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    input: {
        maxHeight: verticalScale(300),
        minHeight: verticalScale(250),
        margin: 12,
        paddingTop: verticalScale(15),
        paddingLeft: scale(13),
        color: Colors?.black,
        textAlignVertical: 'top',
        fontSize: FontSizes?.Medium,
        elevation: 1,

    }
})