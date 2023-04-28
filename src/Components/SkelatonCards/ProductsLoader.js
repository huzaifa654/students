import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { moderateScale, verticalScale } from '../../GlobalStyles/responsiveSize';

const ProductsLoader = ({ height }) => {
    return (
        <SkeletonPlaceholder borderRadius={0}>

            <View style={styles.containerCategories}>
                <View style={{ width: '23%', height: height / 4, borderRadius: 10, }} />
                <View style={{ width: '23%', height: height / 4, borderRadius: 10, }} />
                <View style={{ width: '23%', height: height / 4, borderRadius: 10, }} />
                <View style={{ width: '23%', height: height / 4, borderRadius: 10, }} />
                {/* <View style={{ width: moderateScale(60), height: height / 2, borderRadius: 10, }} /> */}

            </View>

            <View style={styles.container}>
                <View style={{ width: '45%', height, borderRadius: 10, }} />
                <View style={{ width: '45%', height, borderRadius: 10, }} />
            </View>

            <View style={styles.container}>
                <View style={{ width: '45%', height, borderRadius: 10, }} />
                <View style={{ width: '45%', height, borderRadius: 10, }} />
            </View>

            <View style={styles.container}>
                <View style={{ width: '45%', height, borderRadius: 10, }} />
                <View style={{ width: '45%', height, borderRadius: 10, }} />
            </View>
        </SkeletonPlaceholder>
    );
};

export default ProductsLoader;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: "center",
        justifyContent: "space-around",
        width: '95%',
        marginTop: 10
        // height: verticalScale(60)
    },
    containerCategories: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: "center",
        justifyContent: "space-around",
        width: '100%',
        marginTop: 10,
        marginLeft: 10
    }
});