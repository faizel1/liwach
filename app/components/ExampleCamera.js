import React, {useState} from 'react';

import {
  PermissionsAndroid,
  TextInput,
  Image,
  Switch,
  View,
  Text,
  Button,
} from 'react-native';
import AppPicker from './app/components/AppPicker';
import AppTextInput from './app/components/AppTextInput';
import ListItem from './app/components/ListItem';
import Screen from './app/components/Screen';
import LoginScreen from './app/screen/LoginScreen';
import MessagesScreen from './app/screen/MessagesScreen';
import ListtingScreen from './app/screen/ListingScreen';

import ListingEditingScreen from './app/components/ListingEditingScreen';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export default function App() {
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

  const [imageUri, setImaageUri] = useState('');
  const openCamera = () => {
    requestCameraPermission();

    let options = {
      storageOptions: {
        path: 'image',
        mediaType: 'photo',
      },
      includeBase64: true,
    };
    launchCamera(options, response => {
      console.log('Response =', response);
      if (response.didCancel) {
        console.log('user canceled user image picker');
      } else if (response.customButton) {
        console.log('user tapped custom button'.response.customButton);
      } else if (response.error) {
        console.log('image picker error'.response.error);
      } else {
        const source = {uri: 'data:image/jpeg;base64,' + response.base64};
        setImaageUri(source);
      }
    });
  };

  return (
    <Screen>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          flex: 1,
        }}>
        <Text>Try permissions</Text>
        {/* <Button title="request permissions" onPress={} /> */}

        <Button
          title="Open Camera"
          onPress={() => {
            openCamera();
          }}
        />
        <Image
          source={imageUri}
          style={{
            height: 100,
            width: 100,
            borderWidth: 2,
            borderRadius: 100,
            borderColor: 'black',
          }}
        />
      </View>
    </Screen>
  );
}
