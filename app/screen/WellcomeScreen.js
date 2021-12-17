import React from 'react';

import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';

import AppButton from '../components/AppButton';
function WellcomeScreen(props) {
  return (
    <ImageBackground
    blurRadius={4}
  
    source={require('../assets/couch.jpg')}
      style={styles.background}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/chim.png')} style={styles.logo} />

        <Text style={styles.tagLine}>Digital Liwach</Text>
      </View>
      <View style={styles.buttonContainers}>

      <AppButton  title="login"  />
      <AppButton title="Register" color="secondary"/>
      
      </View>

    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonContainers:{
    width:"100%",
    // paddingVertical:10,
    padding:10
  }
  ,
  logo: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  logoContainer:{
     top:70,
     alignItems:"center",
     position:"absolute"
     
 }
  ,
  
  tagLine:{
    fontSize:25,
    fontWeight:"600",
    paddingVertical:20
  }
});
export default WellcomeScreen;
