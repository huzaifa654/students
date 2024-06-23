import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  Home,
  More,
  Support,
  Trackings,
  Bookings,
} from '../../../Screens/UsersScreens';
import CustomTabs from './CustomTabs';
import {
  HomeIcon,
  BookingsIcons,
  ActiveBookingIcons,
  MoreIcons,
  SupportIcons,
  SkillIcon,
} from '../../../Constants/AppImages';
import { verticalScale } from '../../../Utilitis/ResponsiveSizes';
import Profile from '../../../Screens/UsersScreens/ProfileScreens/Profile';
import SkillCourseView from '../../../Components/SemesterCousesView/SkillCourseView';
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

      {/* 

      <Tab.Screen
        name={'Trackings'}
        component={Trackings}
        options={{
          tabBarIcon: ({focused}) => (
            <CustomTabs
              isFocus={focused}
              label={''}
              icon={ActiveBookingIcons}
            />
          ),
        }}
      />

      <Tab.Screen
        name={'Support'}
        component={Support}
        options={{
          tabBarIcon: ({focused}) => (
            <CustomTabs
              isFocus={focused}
              label={'SUPPORT'}
              icon={SupportIcons}
            />
          ),
        }}
      />

      <Tab.Screen
        name={'More'}
        component={More}
        options={{
          tabBarIcon: ({focused}) => (
            <CustomTabs isFocus={focused} label={'MORE'} icon={MoreIcons} />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
};

export default BottomNavigation;
