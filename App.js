





import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import {
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import DashboardScreen from './screens/DashboardScreen';
import TasksScreen from './screens/TasksScreen';
import ProfileScreen from './screens/ProfileScreen';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>

      <Stack.Navigator
        initialRouteName="Dashboard"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#0F172A',
          },

          headerTintColor: '#FFFFFF',

          headerTitleStyle: {
            fontWeight: 'bold',
          },

          contentStyle: {
            backgroundColor: '#0F172A',
          },
        }}
      >

        <Stack.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Tasks"
          component={TasksScreen}
          options={{
            title: 'My Tasks',
          }}
        />

        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            title: 'My Profile',
          }}
        />

      </Stack.Navigator>

    </NavigationContainer>
  );
}
