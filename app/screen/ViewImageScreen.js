import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import colors from '../config/colors';

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
        <View style={styles.closeIcon}>

        </View>
        <View style={styles.deleteIcon}>

        </View>
        
      <Image
resizeMode='contain'
style={styles.image}
        source={require('../assets/mountain.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
closeIcon:{
    width:50,
    height:50,
    top:40,
    left:30,
    backgroundColor:colors.primary,
    position:"absolute"
},
    container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  deleteIcon:{
    width:50,
    height:50,
    top:40,
    right:30,
    backgroundColor:colors.secondary,
    position:"absolute"
},
  image: {
    width: '100%',
    height: '100%',
  },
});
