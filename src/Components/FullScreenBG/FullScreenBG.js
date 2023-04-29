/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';

export default function FullScreenBG({source, children, style, resizeMode}) {
  return (
    <ImageBackground
      source={source}
      style={[style ? {...style} : styles.constiner]}
      resizeMode={resizeMode ? resizeMode : 'cover'}>
      {children}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  constiner: {
    flex: 1,
    // marginTop: 22,
  },
});
