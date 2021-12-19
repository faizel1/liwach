import React from 'react';
import {StyleSheet, Text, TouchableNativeFeedback, View} from 'react-native';
import colors from '../config/colors';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ListItemDeleteAction({onPress}) {
  return (
    <TouchableNativeFeedback onPress={onPress} >
      <View style={styles.container}>
        <MaterialCommunityIcon
          name="trash-can"
          color={colors.white}
          size={35}
        />
      </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
