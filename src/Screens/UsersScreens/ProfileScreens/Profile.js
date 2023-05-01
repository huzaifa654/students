/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ProfileView from '../../../Components/ProfileView/ProfileView';

export default function Profile() {
  return (
    <View style={styles.container}>
      <ProfileView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf3fe',
  },
});
