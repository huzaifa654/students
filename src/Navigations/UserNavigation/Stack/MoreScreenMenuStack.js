import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {EditProfile, Profile, More} from '../../../Screens/UsersScreens';

const Stack = createNativeStackNavigator();

export default function MoreScreenMenuStack() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'More'}>
      <Stack.Screen name="More" component={More} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
    </Stack.Navigator>
  );
}
