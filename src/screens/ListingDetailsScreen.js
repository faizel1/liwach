import React from 'react';
import {Text, Image, StyleSheet, View} from 'react-native';
import AppText from '../components/AppText';
import ListItems from '../components/ListItems';
import colors from '../config/colors';

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={require('../assets/fish.jpg')} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}> A Fish Tank Auction</AppText>
        <AppText style={styles.price}>$100</AppText>
      </View>
 
<ListItems 

image={require("../assets/logo.png")}
title="Ubuntu Man"
subTitle="5K Dollar"


/>

<ListItems 

image={require("../assets/mountain.png")}
title="Mountain Guy"
subTitle="4 Grand"


/>

<ListItems 

image={require("../assets/chim.png")}
title="Nature Woman"
subTitle="6 Grand"


/>
 
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 10,
  },
  image: {
    width: '100%',
    height: 220,
  },
  listing:{
      color:colors.medium,
      fontSize: 15,
      marginLeft:5
  }
  ,
  price: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft:5
  },

  title: {
    fontSize: 20,
    fontWeight: '400',
  },
  userDetail:{
      flexDirection:"column",
    marginLeft:10
    }
  ,
  userContainer:{
      flexDirection:"row",
      paddingLeft:20
  }
  ,
  userImage:{
      height:70,
      width:70,
      borderRadius:35
  }
});

export default ListingDetailsScreen;
