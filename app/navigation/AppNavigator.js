import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import ListingDetailsScreen from '../screen/ListingDetailsScreen';

// import ListingEditingScreen from '../components/ListingEditingScreen';
import ListingEditingScreen from '../components/ListingEditingScreen';
import FeedNavigator from './FeedNavigator';
import AccountNavigation from './AccountNavigation';
import NewListingButton from './NewListingButton';

export default function AppNavigator() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={FeedNavigator}
        options={{
          headerShown: false
,
          tabBarIcon: ({color, size}) => (
            <MatIcon name="home" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="ListingEdit"
        component={ListingEditingScreen}
        options={({navigation}) => ({
          tabBarLabel: '',
    
          tabBarIcon: ({color, size}) => (
            <NewListingButton
              onPress={() => navigation.navigate('ListingEdit')}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Account1"
        component={AccountNavigation}
        options={{
          title:"Account",
          headerShown:false,
          tabBarIcon: ({color, size}) => (
            <MatIcon name="account" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
