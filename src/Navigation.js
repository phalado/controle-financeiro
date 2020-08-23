import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import InitialScreen from './components/InitialScreen';
import AccountCreate from './containers/AccountCreate';
import VerifyAccounts from './containers/VerifyAccounts';

const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

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
        <Stack.Navigator>
          <Stack.Screen name="Initial Screen" component={InitialScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Account Create" component={AccountCreate} options={{ headerShown: false }} />
          <Stack.Screen name="Verify Accounts" component={VerifyAccounts} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default Navigation;
