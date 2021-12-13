import React from 'react';
import {Image, View, StyleSheet} from 'react-native';

import AppText from './AppText';
import colors from "../config/colors";
function ListItem({image,title,subTitle}) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}> {title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({

 subTitle: {
    color: colors.medium,
    fontSize: 15,
    marginLeft: 5,
  },
  title: {
    fontSize: 15,
    fontWeight: '400',
  },
 detailsContainer: {
    flexDirection: 'column',
    marginLeft: 5,
    padding:5
  },
  container: {
    flexDirection: 'row',
    paddingLeft: 20,
    marginVertical:10
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
  },
});

export default ListItem;
