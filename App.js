
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Tabs from "./views/tabs";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import SignUpScreen from './screens/SignUpScreen';


export default function App() {
  return(
    // <ClerkProvider publishableKey={"pk_test_d2VsbC1sZW1taW5nLTc0LmNsZXJrLmFjY291bnRzLmRldiQ"}>
    <NavigationContainer>
    {/* <SignedIn> */}
          <Tabs></Tabs>
    {/* </SignedIn> */}
        {/* <SignedOut> */}
          {/* <Text>You are Signed out</Text> */}
          {/* <SignUpScreen></SignUpScreen> */}
        {/* </SignedOut> */}
    </NavigationContainer>
    // </ClerkProvider>
  )
}