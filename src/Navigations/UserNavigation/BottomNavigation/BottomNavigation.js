import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CustomTabs from './CustomTabs';
import {
  HomeIcon,
  SkillIcon,
} from '../../../Constants/AppImages';
import { verticalScale } from '../../../Utilitis/ResponsiveSizes';
import Profile from '../../../Screens/UsersScreens/ProfileScreens/Profile';
import SkillDeatil from '../../../Screens/Skills/SkillDeatil';

const BottomNavigation = () => {
  const Tab = createBottomTabNavigator();

  const screenOptions = route => ({
    tabBarHideOnKeyboard: true,
    headerShown: false,
    tabBarShowLabel: false,
    tabBarIconStyle: {
      paddingBottom: 0,
    },
    tabBarStyle: {
      height: verticalScale(70),
      backgroundColor: '#fff',
    },
  });

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name={'Home'}
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomTabs isFocus={focused} label={'HOME'} icon={HomeIcon} />
          ),
        }}
      />
      <Tab.Screen
        name={'Skills'}
        component={SkillDeatil}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomTabs
              isFocus={focused}
              label={'Skills'}
              icon={SkillIcon}
            />
          ),
        }}
      />


    </Tab.Navigator>
  );
};

export default BottomNavigation;
