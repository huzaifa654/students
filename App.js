/* eslint-disable prettier/prettier */
import { StatusBar, StyleSheet, Text, View } from 'react-native';

import React, { useEffect, useState } from 'react';

import WelcomeScreen from './src/Screens/WelcomeScreen/WelcomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './src/Screens/UsersScreens';
import Colors from './src/Utilitis/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import SplashScreen from './src/Screens/SplashScreen/SplashScreen';
import Profile from './src/Screens/UsersScreens/ProfileScreens/Profile';
import Login from './src/Screens/Login/Login';
import Signup from './src/Screens/Signup/Signup';
import { Provider } from 'react-redux';
import { store } from './Store/Store';
import SemesterDetails from './src/Screens/SemesterDetai/SemesterDetails';
import Assignment from './src/Screens/AssignmentsDetail/Assignment';
import SkillDeatil from './src/Screens/Skills/SkillDeatil';
import BottomNavigation from './src/Navigations/UserNavigation/BottomNavigation/BottomNavigation';

const Stack = createNativeStackNavigator();

export default function App() {
  const [SplashShow, SetSplashShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      SetSplashShow(false);
    }, 1500);
  }, []);

  return (

    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.AppWhite }}>


      <Provider store={store}>
        <NavigationContainer>
          <StatusBar
            backgroundColor={'transparent'}
            barStyle={'dark-content'}
          />

          <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName={'SplashScreen'}>
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
            <Stack.Screen name="LoginScreen" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />

            <Stack.Screen name="Profile" component={BottomNavigation} />
            {/* <Stack.Screen name="Home" component={Home} /> */}
            {/* <Stack.Screen name="Profile" component={Profile} /> */}
            <Stack.Screen name="Semester" component={SemesterDetails} />
            <Stack.Screen name="Assignment" component={Assignment} />
            <Stack.Screen name="Skill" component={SkillDeatil} />



          </Stack.Navigator>
        </NavigationContainer>
      </Provider>

    </SafeAreaView>
  );
}
