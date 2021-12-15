import React from 'react';

import {ImageBackground,Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import AppText from './app/components/AppText';
import ViewImageScreen from './app/screen/ViewImageScreen';
import WellcomeScreen from './app/screen/WellcomeScreen';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default function App() {

  return (
    <View style={styles.container}>

<Icon name="email" size={30} color="blue" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',

    alignItems: 'center',
    justifyContent: 'center',
  },
});
