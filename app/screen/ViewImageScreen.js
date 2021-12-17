import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '../config/colors';

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" size={40} color={colors.white} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons name="trash-can-outline" size={40} color={colors.white} />
      </View>

      <Image
        resizeMode="contain"
        style={styles.image}
        source={require('../assets/mountain.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    top: 40,
    left: 30,
    position: 'absolute',
  },
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  deleteIcon: {
    top: 40,
    right: 30,
    position: 'absolute',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
