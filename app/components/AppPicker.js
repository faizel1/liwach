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

export default function AppPicker({
  icon,
  numberOfColumns = 1,
  onSelectedItem,

  PickerItemComponent = PickerItem,
  selectedItem,
  placeholder,
  items,
}) {
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
          {selectedItem ? (
            <AppText style={styles.text}>{(selectedItem, label)}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}

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
          numColumns={numberOfColumns}
          renderItem={({item}) => (
            <PickerItemComponent
              item={item}
              label={item.label}
              onPress={() => {
                setModalVisible(false);
                onSelectedItem(item);
              }}
            />
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
  placeholder: {
    color: DefaultStyles.colors.medium,
    flex: 1,
  },
  text: {
    flex: 1,
  },
});
