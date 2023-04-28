import React, { useState, useEffect } from 'react';
import { Animated } from 'react-native';
import { moderateScale, verticalScale } from '../../GlobalStyles/responsiveSize';
import { DonutTheme } from '../../constants/images';

const ImageRotation = () => {

    const [rotateAnimation, setRotateAnimation] = useState(new Animated.Value(0));


    const handleAnimation = () => {
        Animated.timing(rotateAnimation, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true
        }).start(() => {
            rotateAnimation.setValue(0);
            handleAnimation()
        });
    };

    const interpolateRotating = rotateAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '720deg'],
    });

    const animatedStyle = {
        transform: [
            {
                rotate: interpolateRotating,
            },
        ],
    };

    useEffect(() => {
        handleAnimation()
    }, [])


    return (
        // <TouchableOpacity onPress={async () => handleAnimation()}>
        <Animated.Image style={[{ width: moderateScale(130), height: verticalScale(130) }, animatedStyle]} source={DonutTheme} resizeMode={'contain'} />
        // </TouchableOpacity>
    );
};

export default ImageRotation;