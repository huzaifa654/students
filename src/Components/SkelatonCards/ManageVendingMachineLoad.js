import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { verticalScale } from '../../GlobalStyles/responsiveSize';

const MangeVendingMachineLoader = ({ height }) => {
    return (
        <SkeletonPlaceholder borderRadius={0}>

            <View style={{ width: '90%', height: 200, borderRadius: 10, marginTop: 10, alignSelf: "center" }} />

            <View style={styles.containerrow}>
                <View style={{ width: '45%', height: 130, borderRadius: 10, marginTop: 10 }} />
                <View style={{ width: '45%', height: 130, borderRadius: 10, marginTop: 10 }} />
            </View>

            <View style={styles.container}>
                <View style={{ width: '100%', height, borderRadius: 10, marginTop: 10 }} />
                <View style={{ width: '100%', height, borderRadius: 10, marginTop: 10 }} />
                <View style={{ width: '100%', height, borderRadius: 10, marginTop: 10 }} />
                <View style={{ width: '100%', height, borderRadius: 10, marginTop: 10 }} />
                <View style={{ width: '100%', height, borderRadius: 10, marginTop: 10 }} />
                <View style={{ width: '100%', height, borderRadius: 10, marginTop: 10 }} />
                <View style={{ width: '100%', height, borderRadius: 10, marginTop: 10 }} />
            </View>
        </SkeletonPlaceholder>
    );
};

export default MangeVendingMachineLoader;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        alignSelf: "center",
        width: '90%',
        height: '100%'
        // height: verticalScale(60)
    },
    containerrow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        alignSelf: "center",
        width: '90%',
        marginTop: 20
        // height: verticalScale(60)
    }
});