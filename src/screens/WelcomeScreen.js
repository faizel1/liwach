import React from 'react';
import {ImageBackground, Image, StyleSheet, Text, View} from 'react-native';

import {colors} from '../config/colors';

import AppButton from './AppButton';

function WellcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/background.jpg')}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/logo.png')} />
        <Text>Welcome Bro </Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="Login" />
        <AppButton title="Register" propsColor="secondary" />
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    width: "100%",
    margin: 20,
    padding:20,
  },
logoContainer:{
    position:"absolute",
    top:70,
    alignItems:"center"
}
  ,
  logo: {width: 100, height: 100},
});
export default WellcomeScreen;
