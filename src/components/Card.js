import React from 'react';

import {View, Image, StyleSheet} from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';

function Card({title, subTitle, image}) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 15,
    overflow: 'hidden',
  },
  detailsContainer:{
      padding:7
  }
  ,
  image: {
    width: '100%',
    height: 200,
  },
  subTitle: {
    fontWeight:"bold",
    color:colors.secondary
  },
  
  
});

export default Card;
