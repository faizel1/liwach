
import React from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import Screen from '../components/Screen';
import * as Yup from 'yup';

import Icon from 'react-native-vector-icons/FontAwesome';

import { AppForm, AppFormField, SubmitButton } from "../components/forms"
import colors from '../config/colors';


const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    phone_number: Yup.string().required().min(4).label('Phone Number'),
});



export default function AccountDetail({ navigation }) {


    return (
        <Screen style={styles.container}>
            <Image style={styles.logo} source={require('../assets/logo.png')} />

            <AppForm
                initialValues={{ email: '', password: '' }}
                onSubmit={
                    values => {
                        navigation.navigate("ListingScreen")
                    }


                }
                validationSchema={validationSchema}>

                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="email-address"
                    name="email"
                    placeholder="Email"
                    textContentType="emailAddress"
                />

                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    name="phone_number"
                    placeholder="Phone Number"
                    textContentType="password"
                    keyboardType="phone-pad"
                />
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    name="interested_areas"
                    placeholder="Interested Areas"

                />


                <SubmitButton title="Update" />
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
        borderRadius: 50
    }, inputView: {

        height: 80,

        flexDirection: 'row',
        alignItems: 'center',
    },
});