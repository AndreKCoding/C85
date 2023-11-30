import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import TabNavigator from './navigation/TabNavigator'
import BottomTabNavigator from './navigation/TabNavigator';
import config from './config'

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabNavigator/>
    </NavigationContainer>
  );
}
