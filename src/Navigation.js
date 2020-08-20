import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import InitialScreen from './components/InitialScreen';

class Navigation extends Component {
  componentDidMount() {
    StatusBar.setHidden(true);
  }

  componentWillUnmount() {
    StatusBar.setHidden(false);
  }

  render() {
    return (
      <NavigationContainer>
        <StackActions.Navigator>
          <Stack.Screen name="Initial Screen" component={InitialScreen} options={{ headerShown: false }} />
        </StackActions.Navigator>
      </NavigationContainer>
    )
  }
}