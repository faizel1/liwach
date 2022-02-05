
import React from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import Screen from '../components/Screen';
import * as Yup from 'yup';

import Icon from 'react-native-vector-icons/FontAwesome';

import { AppForm, AppFormField, SubmitButton } from "../components/forms"
import colors from '../config/colors';


const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});



export default function LoginScreen({ navigation }) {
  // const eye=passwordSecured?"eye-slash":"eye";

  const handelLogin = () => {
    navigation.navigate("ListingScreen")
  }

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo.png')} />

      <AppForm
        initialValues={{ email: '', password: '' }}
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
        <View style={styles.inputView}>

          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            placeholder="Password"
            secureTextEntry
            textContentType="password"

          />
          <Icon style={{alignSelf:"center"}} name={"eye"} color="dodgerblue" size={20} />
        </View>


        <SubmitButton title="LOGIN" />
      </AppForm>
      <Text style={{ textAlign: "center" }}>
        Don't have an Account ?{' '}
        <Text
          style={{ color: colors.primary }}
          onPress={() => navigation.navigate('RegisterScreen')}>
          Register Here
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
  }, inputView: {
    
    height: 80,

    flexDirection: 'row',
    alignItems: 'center',
  },
});
