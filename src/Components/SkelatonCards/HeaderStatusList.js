import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { verticalScale } from '../../GlobalStyles/responsiveSize';

const HeaderStatusListSkelton = ({ height }) => {
    return (
        <SkeletonPlaceholder borderRadius={0}>
            <View style={styles.container}>
                <View style={{ width: '30%', height, borderRadius: 10, }} />
                <View style={{ width: '30%', height, borderRadius: 10, }} />
                <View style={{ width: '30%', height, borderRadius: 10 }} />
            </View>
        </SkeletonPlaceholder>
    );
};

export default HeaderStatusListSkelton;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: "center",
        justifyContent: "space-around",
        width: '90%',
        marginTop: 10
        // height: verticalScale(60)
    }
});