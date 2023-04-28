import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { verticalScale } from '../../GlobalStyles/responsiveSize';

const VerticaleSquareFlatList = ({ height }) => {
    return (
        <SkeletonPlaceholder borderRadius={0}>
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

export default VerticaleSquareFlatList;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        alignSelf: "center",
        width: '90%',
        height: '100%'
        // height: verticalScale(60)
    }
});