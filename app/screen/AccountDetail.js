
import React, { useEffect, useState } from 'react';
import {
    Image, StyleSheet, View, TextInput, TouchableWithoutFeedback, PermissionsAndroid,
} from 'react-native';
import Screen from '../components/Screen';
import * as Yup from 'yup';

import Icon from 'react-native-vector-icons/FontAwesome';
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { AppForm, AppFormField, SubmitButton } from "../components/forms"
import colors from '../config/colors';


const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    phone_number: Yup.string().required().min(4).label('Phone Number'),
});



export default function AccountDetail({ navigation }) {

    const [imageUri, setUri] = useState(null);
    useEffect(() => {
        requestCameraPermission();
    }, []);
    const requestCameraPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title: 'Cool Photo App Camera Permission',
                    message:
                        'Cool Photo App needs access to your camera ' +
                        'so you can take awesome pictures.',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('You can use the camera');
            } else {
                console.log('Camera permission denied');
            }
        } catch (err) {
            console.warn(err);
        }
    };

    const selectImage = async () => {
        try {
            const result = await launchImageLibrary({
                mediaType: 'photo',
                quality: 0.5,
            });
            if (!result.didCancel) {

                console.log(result);
                setUri(result.assets[0].uri);
            }
        } catch (error) {
            console.log('error reading an image', error);
        }
    };


    return (
        <Screen style={styles.container}>
            {/* <Image style={styles.logo} source={require('../assets/logo.png')} /> */}
            {/* {!imageUri && <MatIcon style={styles.logo} color={colors.medium} name="camera" size={40} />} */}
            <TouchableWithoutFeedback style={styles.logo} >
                <View style={styles.container}>

                    {!imageUri && <MatIcon 
                    onPress={selectImage}
                    color={colors.medium} name="camera" size={40} />}

                    <Image
                        // source={require('../assets/logo.png')}
                     source={{ uri: imageUri }} 
                    />
                </View>

            </TouchableWithoutFeedback>
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
        borderRadius: 50,
        backgroundColor: "red"
    }, inputView: {

        height: 80,

        flexDirection: 'row',
        alignItems: 'center',
    },
});