import React, { useEffect, useState } from 'react';
import {
    Alert,
    Image,
    StyleSheet,
    PermissionsAndroid,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

import colors from '../config/colors';

export default function ImageInput() {
const[imageUri,setUri]=useState(null);

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
        <TouchableWithoutFeedback onPress={selectImage}>
            <View style={styles.container}>
                {!imageUri && <MatIcon color={colors.medium} name="camera" size={40} />}
                {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}

            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        alignItems: 'center',
        borderRadius: 15,
        height: 100,
        width: 100,
        justifyContent: 'center',
        overflow: 'hidden',
    },

    image: {
        width: '100%',
        height: '100%',
    },
});
