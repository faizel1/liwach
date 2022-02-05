import React from 'react';

import {View, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '../config/colors';

export default function NewListingButton({onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MatIcon name="plus-circle" size={30} color={colors.white} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',

    backgroundColor: colors.primary,
    borderRadius: 32,
    bottom: 0,
    borderColor: colors.light,
    justifyContent: 'center',
    height: 64,
    width: 64,
  },
});
