import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Notification} from '../../../Screens/UsersScreens';
const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'Home'}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Notification" component={Notification} />
      {/* <Stack.Screen name="EditProfile" component={EditProfile} /> */}
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
