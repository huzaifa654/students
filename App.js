/* eslint-disable prettier/prettier */
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import WelcomeScreen from './src/Screens/WelcomeScreen/WelcomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from './src/Screens/UsersScreens';
import Colors from './src/Utilitis/Colors';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'transparent'} barStyle={'dark-content'} />

      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={'WelcomeScreen'}>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
