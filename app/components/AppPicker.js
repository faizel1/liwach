//this componente is cutom picker becsues it isnt found on expo you should use the third party library for picker in the featur

import React, {useState} from 'react';
import {
  Button,
  FlatList,
  Modal,
  StyleSheet,
  TouchableNativeFeedback,
  View,
} from 'react-native';

import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import DefaultStyles from '../config/style';
import AppText from './AppText';
import PickerItem from './PickerItem';
import Screen from './Screen';

export default function AppPicker({icon,onSelectedItem,selectedItem, placeholder, items}) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableNativeFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MatIcon
              style={styles.icon}
              name={icon}
              color={DefaultStyles.colors.medium}
              size={20}
            />
          )}
          <AppText style={styles.text}>{ selectedItem? selectedItem.label: placeholder}</AppText>
          <MatIcon
          
            name="chevron-down"
            color={DefaultStyles.colors.medium}
            size={20}
          />
        </View>
      </TouchableNativeFeedback>

      <Modal visible={modalVisible} animationType="slide">
        <Button title="close" onPress={() => setModalVisible(false)} />

        <FlatList
          data={items}
          keyExtractor={item => item.value.toString()}
          renderItem={({item}) => (
            <PickerItem 
            label={item.label} 
            onPress={() =>{
              setModalVisible(false)
              onSelectedItem(item)
            }} />
          )}
        />
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    backgroundColor: DefaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    width: '100%',
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
    alignSelf: 'center',
  },
  text: {
    flex: 1,
  },
});
