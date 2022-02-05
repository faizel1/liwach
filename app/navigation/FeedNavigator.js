import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ListingScreen from '../screen/ListingScreen';
import ListingDetailsScreen from '../screen/ListingDetailsScreen';

const Stack = createStackNavigator();
export default FeedNavigator = () => {
  return (

    <Stack.Navigator 
    // mode='card'
    >
      <Stack.Screen name="ListingScreen" component={ListingScreen} />
      <Stack.Screen name="ListingDetailsScreen" component={ListingDetailsScreen} />
    </Stack.Navigator>
  );
}
