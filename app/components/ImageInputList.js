import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function ImageInputList({
  imageUris = [],
  onRemoveImage,
  onAddImage,
}) {
  return (
    <View style={styles.container}>
      {imageUris.map(uri => (
        <ImageInput
          imageUris={uri}
          key={uri}
          onchangeImage={() => onRemoveImage(uri)}
        />
      ))}
<ImageInput onchangeImage={() => onAddImage(uri)} />
 

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
