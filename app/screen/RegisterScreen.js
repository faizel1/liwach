
import React from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import Screen from '../components/Screen';
import * as Yup from 'yup';

import { AppForm, AppFormField, SubmitButton } from "../components/forms"
import colors from '../config/colors';


const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  phone: Yup.string().required().min(4).label('Phone'),
  full_name: Yup.string().required().min(4).label('Full Name'),
  password: Yup.string().required().min(4).label('Password'),
});



export default function RegisterScreen({navigation}) {
  const handelRegister=()=>{
    navigation.navigate("ListingScreen")
  }

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo.png')} />

      <AppForm
        initialValues={{ email: '', password: '',phone:'',full_name:'' }}
        onSubmit={
          values => {
            handelRegister()
          }


        }
        validationSchema={validationSchema}>

        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="account"
          keyboardType="email-address"
          name="full_name"
          placeholder="Full Name"
        />

        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="phone"
          keyboardType="phone-pad"
          name="phone"
          placeholder="Phone Number"
        />

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

        <SubmitButton title="Register" />
      </AppForm>
      <Text style={{textAlign:"center"}}>
        Don you have an Account ?{' '}
        <Text
          style={{ color:colors.primary }}
          onPress={() => navigation.navigate('LoginScreen')}>
          Login
        </Text>
      </Text>
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
    borderRadius: 50
  },
});
