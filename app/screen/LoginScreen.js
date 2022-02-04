
import React from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import Screen from '../components/Screen';
import * as Yup from 'yup';

import {AppForm,AppFormField,SubmitButton} from "../components/forms"


const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});



export default function LoginScreen({navigation}) {
const handelLogin=()=>{
  navigation.navigate("ListingScreen")
}

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo.png')} />

      <AppForm
        initialValues={{email: '', password: ''}}
        onSubmit={
          values => {
            handelLogin()
          }
        
          
        }
        validationSchema={validationSchema}>
                
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              keyboardType="email-address"
              name="email"
              placeholder="Email"
              textContentType="emailAddress"
              />

            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              name="password"
              placeholder="Password"
              secureTextEntry
              textContentType="password"
              />

            <SubmitButton title="LOGIN"  />
              </AppForm>
         
            </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
    borderRadius:50
  },
});
