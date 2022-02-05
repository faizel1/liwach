// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screen/LoginScreen';
import RegisterScreen from '../screen/RegisterScreen';
import ListingScreen from '../screen/ListingScreen';
import ListingDetailsScreen from '../screen/ListingDetailsScreen';
import WellcomeScreen from '../screen/WellcomeScreen';
import AppNavigator from './AppNavigator';
import MessagesScreen from '../screen/MessagesScreen';

const Stack = createNativeStackNavigator();

function AuthNavigation() {
    return (

        <Stack.Navigator             >
            <Stack.Screen
                options={{
                    headerShown: false
                }}
                name="Home" component={WellcomeScreen} />
            <Stack.Screen
                options={{
                    headerShown: false
                }}
                name="LoginScreen" component={LoginScreen} />
            <Stack.Screen
                options={{
                    headerShown: false
                }}
                name="RegisterScreen" component={RegisterScreen} />
            <Stack.Screen name="ListingScreen"
                options={{
                    headerShown: false
                }}
                component={AppNavigator} />

            <Stack.Screen name="MessagesScreen"
       
                component={MessagesScreen} />


        </Stack.Navigator>

    );
}

export default AuthNavigation;