import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
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
} from '../../../Constants/AppImages';
import {verticalScale} from '../../../Utilitis/ResponsiveSizes';

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
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <CustomTabs isFocus={focused} label={'HOME'} icon={HomeIcon} />
          ),
        }}
      />

      <Tab.Screen
        name={'Bookings'}
        component={Bookings}
        options={{
          tabBarIcon: ({focused}) => (
            <CustomTabs
              isFocus={focused}
              label={'BOOKINGS'}
              icon={BookingsIcons}
            />
          ),
        }}
      />

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
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
