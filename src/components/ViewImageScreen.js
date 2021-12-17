import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons';

import colors from '../config/colors';



function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="cover"
        style={styles.image}
        source={require('../assets/.jpg')}
      />
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" color="white"/>
        </View>
      <View style={styles.deleteIcon}><Text style={styles.fit}>X</Text></View>

    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    // width: 50,
    // height: 50,
    // backgroundColor: colors.primary,
    position: 'absolute',
    top: 40,
    left: 30,
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.secondary,
    position: 'absolute',
    top: 40,
    right: 30,
  },
  fit:{
      fontSize:45,
    alignSelf:"center",
    color:"gold",
    }
  ,
  image: {
    width: '100%',
    height: '100%',
  },
});

export default ViewImageScreen;
