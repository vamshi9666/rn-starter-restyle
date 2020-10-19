import { createDrawerNavigator } from '@react-navigation/drawer';
import * as React from 'react';
import { HOME_SCREEN, PROFILE_SCREEN } from '../constants/screen-names';
import HomeScreen from '../screens/home-screen';
import ProfileScreen from '../screens/profile-screen';

export type ScreensList = {
  [HOME_SCREEN]: undefined;
  [PROFILE_SCREEN]: undefined;
};

const Drawer = createDrawerNavigator<ScreensList>();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName={HOME_SCREEN}>
      <Drawer.Screen
        name={HOME_SCREEN}
        component={HomeScreen}
        options={{
          title: 'Home',
        }}
      />
      <Drawer.Screen
        name={PROFILE_SCREEN}
        component={ProfileScreen}
        options={{
          title: 'Profile',
        }}
      />
    </Drawer.Navigator>
  );
}
