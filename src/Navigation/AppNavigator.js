import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginPage from '../LoginPage';
import HomePage from '../HomePage';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Home" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
