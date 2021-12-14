import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';

function WellcomeScreen(props) {
  return (
    <ImageBackground
      source={require('../assets/couch.jpg')}
      style={styles.background}>
 <View style={styles.logoContainer}>
     <Image 
      source={require('../assets/chim.png')}
     style={styles.logo}
     />
     <Text>Digital Liwach</Text>
 </View>
 
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
alignItems:"center"  
},
  loginButton: {
    backgroundColor: 'red',
    height: 60,
    width: '100%',
  },
 logo:{
     width:150,
     height:150,
     borderRadius:100
 },logoContainer:{
     top:70,
     alignItems:"center",
     position:"absolute"
     
 }
  , registerButton: {
    backgroundColor: 'yellow',
    height: 60,
    width: '100%',
  },
});
export default WellcomeScreen;
