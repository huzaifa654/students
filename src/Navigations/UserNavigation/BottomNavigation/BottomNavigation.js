import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CustomTabs from './CustomTabs';
import {
  HomeIcon,
  KuLogo,
  SkillIcon,
  semester,
} from '../../../Constants/AppImages';
import { verticalScale } from '../../../Utilitis/ResponsiveSizes';
import Profile from '../../../Screens/UsersScreens/ProfileScreens/Profile';
import SkillDeatil from '../../../Screens/Skills/SkillDeatil';
import Report from '../../../Screens/UsersScreens/Report/Report';
import TimeTable from '../../../Screens/UsersScreens/TimeTable/TimeTable';

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
      <Tab.Screen
        name={'Report'}
        component={Report}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomTabs
              isFocus={focused}
              label={'Report'}
              icon={KuLogo}
            />
          ),
        }}
      />
      <Tab.Screen
        name={'TimeTable'}
        component={TimeTable}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomTabs
              isFocus={focused}
              label={'Time Table'}
              icon={semester}
            />
          ),
        }}
      />


    </Tab.Navigator>
  );
};

export default BottomNavigation;
