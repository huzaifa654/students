import React from 'react'
import { StyleSheet, View, Modal, ActivityIndicator, Text } from 'react-native';
import Colors from '../../Utilitis/Colors';

export default function Loader({ loading }) {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color={Colors?.AppBlue2} />
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background,
        zIndex:100000
    },
});



