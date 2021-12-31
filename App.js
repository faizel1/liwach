import React, {useEffect, useState} from 'react';

import {
  Alert,
  Button,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {NavigationContainer, useNavigation} from '@react-navigation/native';
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons';



import MessagesScreen from './app/screen/MessagesScreen';
import ListingEditingScreen from './app/components/ListingEditingScreen';
import WellcomeScreen from "./app/screen/WellcomeScreen"
import LoginScreen from "./app/screen/ListingScreen"
import Screen from './app/components/Screen';

export default function App() {
  //https://reactnavigation.org/docs/hello-react-navigation

  const Link = () => {
    const navigation = useNavigation();
    return (
      <Button
        title="Click"
        onPress={() =>
          navigation.navigate('TweetDetails', {
            id: 'this is the id',
            title: ' this is the title',
          })
        }
      />
    );
  };

  const Tweets = () => (
    <Screen>
      <Text>Tweets</Text>
<Link />
    </Screen>
  );
  const TweetDetails = ({route}) => (
    <Screen>
      <Text>TweetDetails {route.params.id}</Text>
    </Screen>
  );
  const Stack = createStackNavigator();
  const StackNavigator = () => (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'green',
        },
      }}>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: 'dodgerblue',
          },
        }}
        name="Tweets"
        component={MessagesScreen}
      />
      <Stack.Screen
        options={({route}) => ({title: route.params.title})}
        name="TweetDetails"
        component={TweetDetails}
      />
    </Stack.Navigator>
  );
  const Account = () => (
    <Screen>
      <Text>Account</Text>
    </Screen>
  );

  const Tab = createBottomTabNavigator();
  const TabNavigator = () => (
    <Tab.Navigator
      tabBarOptions={{
        activeBackgroundColor: '#fc5c65',
        activeTintColor: 'white',
        inactiveBackgoundColor: '#eee',
        inactiveTintColor: 'black',
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({size,color}) => <MatIcon name="home" size={size} color={color} />,
        }}
        name="Feed"
        component={StackNavigator}
      />
      <Tab.Screen
      options={{
          tabBarIcon: ({size,color}) => <MatIcon name="email" size={size} color={color} />,
        }}
      name="Account" component={WellcomeScreen } />
    </Tab.Navigator>
  );

  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  image: {
    backgroundColor: 'gray',
    borderColor: 'red',
    width: 100,
    height: 100,
    margin: 10,
    borderRadius: 10,
  },
});
