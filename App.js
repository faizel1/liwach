import React, {useEffect, useState} from 'react';

import {
  Alert,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import ImageInputList from './app/components/ImageInputList';
import ListingEditingScreen from './app/components/ListingEditingScreen';

import Screen from './app/components/Screen';

export default function App() {

  return (
<ListingEditingScreen />  );
}

const styles = StyleSheet.create({
  image: {
    backgroundColor: 'gray',
    borderColor: 'red',
    width: 100,
    height: 100,
    margin: 10,
    borderRadius: 10,
  },
});
