

import React, { useState } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TextInput, Switch, View, Text, Button } from 'react-native';
import AppPicker from './app/components/AppPicker';
import AppTextInput from './app/components/AppTextInput';
import ListItem from './app/components/ListItem';
import Screen from './app/components/Screen';
import LoginScreen from './app/screen/LoginScreen';
import MessagesScreen from "./app/screen/MessagesScreen";
import ListingScreen from "./app/screen/ListingScreen";
import AuthNavigation from './app/navigation/AuthNavigation';
import ListingEditingScreen from "./app/components/ListingEditingScreen";
import AccountScreen from './app/components/AccountScreen';
import AppNavigator from './app/navigation/AppNavigator';
export default function App() {


  return (
    <>
      {/* <MessagesScreen /> */}
      <NavigationContainer>

        <AuthNavigation />
      </NavigationContainer>

    </>
  );
}
