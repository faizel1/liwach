import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Card from '../components/Card';
import Screen from '../components/Screen';
import colors from '../config/colors';
import ListItem from '../components/ListItem';

const listing = [
  {
    id: 1,
    title: 'Red Jacket for Sale',
    price: 200,
    image: require('../assets/jacket.jpg'),
  },
  {
    id: 2,
    title: 'Chim for Sale',
    price: 100,
    image: require('../assets/chim.png'),
  },
];

export default function ListingScreen({ navigation }) {
  const [selectedId, setSelectedId] = useState(null);



  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listing}
        keyExtractor={listing => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={'$' + item.price}
            image={item.image}
            onPress={() => {
              navigation.navigate("ListingDetailsScreen", {
         item
              })

            }
            }


          />

        )

        }

      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light
  }
});
