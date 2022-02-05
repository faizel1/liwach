import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import AppText from '../components/AppText';
import ListItem from '../components/ListItem';
import colors from '../config/colors';

export default function ListingDetailsScreen({route,navigation}) {
  const { item } = route.params;

  return (
    <View>
      <Image style={styles.image} source={item.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{item.title}</AppText>
        <AppText style={styles.price}>{item.price}</AppText>

        <View style={styles.userContainer} >
          <ListItem
            image={require('../assets/chim.png')}
            title="Feyesl Akmel"
            subTitle="5 Listing"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
  },
  price: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
  userContainer:{
      marginVertical:20
  }
});
