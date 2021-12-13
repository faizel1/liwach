import React, {useState} from 'react';
import {Alert, Image, StyleSheet, View} from 'react-native';
import { isRequired } from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType';
// import {RoundedButton} from './src/components/RoundedButton';
// import Swiper from 'react-native-swiper';

import Card from "./src/components/Card";
import ViewImageScreen from './src/components/ViewImageScreen';
import WelcomeScreen from "./src/components/WelcomeScreen";
import ListingDetailsScreen from "./src/screens/ListingDetailsScreen"
import MessagesScreen from './src/screens/MessagesScreen';
export default function App() {
  // return <WelcomeScreen />;
  return <MessagesScreen />
}

const styles = StyleSheet.create({
  Container: {

  },
});
