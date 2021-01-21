import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Profile } from '../screens/';
import HomeTab from './Tabs/HomeTab';
import BottomTab from './Tabs/BottomTab';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeTab} options={({ navigation }) => {
        return {
          tabBarButton: () => <BottomTab navigation={navigation} route="Home" text="Home" icon="folder-open" />
        }
      }} />
      <Tab.Screen name="Profile" component={Profile} options={({ navigation }) => {
        return {
          tabBarButton: () => <BottomTab navigation={navigation} route="Profile" text="Profile" icon="person-outline" />
        }
      }} />
    </Tab.Navigator>
  );
}

export default BottomNavigation