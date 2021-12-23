

import React, {useState} from 'react';

import {TextInput, Switch, View,Text, Button} from 'react-native';
import AppPicker from './app/components/AppPicker';
import AppTextInput from './app/components/AppTextInput';
import Screen from './app/components/Screen';
import LoginScreen from './app/screen/LoginScreen';
import MessagesScreen from "./app/screen/MessagesScreen"

export default function App() {


  return (
<>
< View style={{flex:1}}>
<MessagesScreen />
</ View>


< View style={{flex:1}}>
<LoginScreen />

</ View>



</>
);
}
