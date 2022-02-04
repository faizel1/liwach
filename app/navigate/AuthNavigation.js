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


const Stack = createNativeStackNavigator();

function AuthNavigation() {
    return (
        <NavigationContainer>

            <Stack.Navigator             >
                <Stack.Screen name="ListingScreen" component={ListingScreen} />
                <Stack.Screen
                    options={{
                        headerShown: false
                    }}
                    name="Home" component={WellcomeScreen} />
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
                    <Stack.Screen name="ListingDetailsScreen" component={ListingDetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>

    );
}

export default AuthNavigation;