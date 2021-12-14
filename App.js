import React from 'react';

import {ImageBackground,Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import WellcomeScreen from './app/screen/WellcomeScreen';

export default function App() {

  return (
    <WellcomeScreen/>
    );
}

const stylea = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',

    alignItems: 'center',
    justifyContent: 'center',
  },
});
