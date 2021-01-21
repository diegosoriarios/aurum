import React from 'react';
import { Home, Process } from '../../screens';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const HomeTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomePage" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Processo" component={Process} />
    </Stack.Navigator>
  );
}

export default HomeTab;