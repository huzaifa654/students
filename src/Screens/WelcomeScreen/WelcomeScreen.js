import React from 'react';
import { Image, StyleSheet } from 'react-native';

import { StarBackground, AppTransparentSquareLogo } from '../../Constants/AppImages';
import FullScreenBG from '../../Components/FullScreenBG/FullScreenBG';

export default function WelcomeScreen() {
    return (
        <FullScreenBG source={StarBackground} style={styles.container}>
            <Image source={AppTransparentSquareLogo} resizeMode={'contain'} style={styles.image} />
        </FullScreenBG>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        width: "80%",
        height: '60%',
        alignSelf: "center"
    }
})
