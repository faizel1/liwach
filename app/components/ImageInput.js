import React from 'react';
import {Image, StyleSheet, Text, TouchableWithoutFeedback,View} from 'react-native';
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '../config/colors';

export default function ImageInput({imageUri}) {
  const handelPress=()=>{
    
  }
  return (
    <TouchableWithoutFeedback onPress={handelPress}>
      <View style={styles.container}>
        {!imageUri && <MatIcon color={colors.medium} name="camera" size={40} />}
        {imageUri && <Image source={{uri: imageUri}} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    alignItems: 'center',
    borderRadius: 15,
    height: 100,
    width: 100,
    justifyContent: 'center',
    overflow: 'hidden',
  },

  image: {
    width: '100%',
    height: '100%',
  },
});
