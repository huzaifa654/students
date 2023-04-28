import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import { GoogleLoginIcon, FaceBookLoginIcon } from '../../Constants/AppImages';

import Colors from '../../Utilitis/Colors';
import { moderateScale, verticalScale } from '../../Utilitis/ResponsiveSizes';
import GlobalStyles from '../../Utilitis/GlobalStyles';

export default function SocialLogin() {
    return (
        <View style={styles.column}>
            <TouchableOpacity style={[styles.btn, GlobalStyles.Shadow2]}>
                <Image source={GoogleLoginIcon} style={styles.img} resizeMode={'contain'} />
            </TouchableOpacity>

            <TouchableOpacity style={[styles.btn, GlobalStyles.Shadow2]}>
                <Image source={FaceBookLoginIcon} style={styles.img} resizeMode={'contain'} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    column: {
        width: "100%",
        alignSelf: "center",
    },
    btn: {
        width: '100%',
        alignSelf: "center",
        height: verticalScale(60),
        backgroundColor: Colors.white,
        justifyContent: "center",
        alignItems: "center",
        marginTop: verticalScale(10),
        borderRadius: moderateScale(10)

    },
    img: {
        width: '60%',
        height: verticalScale(30)
    }
})
