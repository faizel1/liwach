import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import colors from '../config/colors';
function AppButton({title,propsColor="primary",onPress}) {
  return (
    <TouchableOpacity style={[styles.button,{backgroundColor:colors[propsColor]}]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    backgroundColor: colors.primary,
    alignItems: 'center',
    
    padding: 12,
    margin:10,
    width: '100%',
    position:"relative",
marginBottom:0
  },

  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});

export default AppButton;
