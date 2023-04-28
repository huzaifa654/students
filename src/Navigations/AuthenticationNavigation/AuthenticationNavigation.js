import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  ForgotPassword,
  GetStartScreen,
  LoginScreen,
  NewPassword,
  OtpAndVerifyScreen,
  SignupScreen,
} from '../../Screens/AuthScreens';
import {EditProfile, Notification, Profile} from '../../Screens/UsersScreens';

import BottomNavigation from '../UserNavigation/BottomNavigation/BottomNavigation';
import UserInfo from '../../Screens/AuthScreens/SignupScreen/UserInfo';
const Stack = createNativeStackNavigator();

export default function AuthenticationNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'GetStartScreen'}>
      <Stack.Screen name="GetStartScreen" component={GetStartScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignupScreen" component={SignupScreen} />
      <Stack.Screen name="UserInfo" component={UserInfo} />

      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="OtpAndVerifyScreen" component={OtpAndVerifyScreen} />
      <Stack.Screen name="NewPassword" component={NewPassword} />
      <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="Notification" component={Notification} />
    </Stack.Navigator>
  );
}
