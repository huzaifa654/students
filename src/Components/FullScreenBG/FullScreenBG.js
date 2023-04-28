import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';

export default function FullScreenBG({source, children, style, resizeMode}) {
  return (
    <ImageBackground
      source={source}
      style={[styles.constiner, {...style}]}
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
