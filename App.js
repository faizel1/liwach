import React from 'react';

import {
  ImageBackground,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AppText from './app/components/AppText';
import ViewImageScreen from './app/screen/ViewImageScreen';
import WellcomeScreen from './app/screen/WellcomeScreen';

import Icon from 'react-native-vector-icons/MaterialIcons';
import AppButton from './app/components/AppButton';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/screen/ListingDetailsScreen';

import MessagesScreen from './app/screen/MessagesScreen';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
// icon usage <Icon name="email" size={30} color="blue" />

export default function App() {
  return <MessagesScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',

    alignItems: 'center',
    justifyContent: 'center',
  },
});
