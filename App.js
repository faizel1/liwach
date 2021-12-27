import React, {useEffect, useState} from 'react';

import {
  Alert,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import ImageInput from './app/components/ImageInput';

import Screen from './app/components/Screen';

export default function App() {
  const [imageUri, setImageUri] = useState();

  

  const selectImage = async () => {
    try {
      const result = await launchImageLibrary();
      if (!result.didCancel) {
        setImageUri(result.assets[0].uri);
        console.log(result.assets[0].uri)
      }
    } catch (error) {
      console.log('error readoing an image', error);
    }
  };

  return (
    <Screen>
      <Button title="Select Imagre" onPress={selectImage} />
      <Image source={{uri:imageUri}} style={{width: 100, height: 100}} />
      <ImageInput imageUri={imageUri}/>
      <ImageInput />
    </Screen>
  );
}

const styles = StyleSheet.create({
  image: {
    backgroundColor: 'gray',
    borderColor: 'red',
    width: 100,
    height: 100,
    margin: 10,
    borderRadius: 10,
  },
});
