
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Tabs from "./views/tabs";


export default function App() {
  return(
    <NavigationContainer>
      <Tabs></Tabs>
    </NavigationContainer>
  )
}