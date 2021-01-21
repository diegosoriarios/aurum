import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from './screens';
import { UserProvider } from './store/UserContext';
import BottomNavigation from './routes/BottomNavigation';

const Stack = createStackNavigator();

function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="App" component={BottomNavigation} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}

export default App;