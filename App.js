import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Login, Home, Profile, Process } from './src/screens';
import { TouchableOpacity, Text } from 'react-native';
import { UserProvider } from './src/store/UserContext';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="App" component={BottomNavigation} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}

function BottomNavigation() {
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

function BottomTab({ navigation, route, text, icon }) {
  let color = navigation.isFocused() ? "#11A8F3" : "#fff";

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(route)}
      style={{
        flexDirection: "row",
        backgroundColor: "#495057",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      }}
    >
      <Text style={{
        color: color, fontSize: 18, fontFamily: 'Cabin-SemiBold',
        paddingHorizontal: 5,
      }}>{text.toUpperCase()}</Text>
      <Icon name={icon} size={30} color={color} />
    </TouchableOpacity>
  );
}

function HomeTab() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomePage" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Processo" component={Process} />
    </Stack.Navigator>
  );
}

export default App;