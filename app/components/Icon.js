import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import colors from '../config/colors';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';


export default function Icon({
  name,
  size = 50,
  backgroundColor = colors.black,
  iconColor = colors.white}
) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: backgroundColor,
        alignItems:"center",
        justifyContent:"center"
      }}>

        <MaterialCommunityIcon
          name={name}
          color={iconColor}
          size={size*0.5}
        />
      </View>
  );
}

const styles = StyleSheet.create({});
