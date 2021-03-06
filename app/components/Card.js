import React from 'react';
import { Image, StyleSheet, Text, View,TouchableHighlight } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';

export default function Card({ title, subTitle, image, onPress }) {
  return (
    <TouchableHighlight underlayColor={colors.light} onPress={onPress}>

      <View style={styles.card}>
        <Image style={styles.image} source={image}></Image>
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle} >{subTitle}</AppText>
        </View>
      </View>
      </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  card: {
    overflow: "hidden",
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
  },
  detailsContainer: {
    padding: 20,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold"
  },
  title: {
    marginBottom: 7,
  },
});
