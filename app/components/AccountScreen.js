import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import colors from '../config/colors';
import Icon from './Icon';
import ListItem from './ListItem';
import ListItemSeparator from './ListItemSeparator';
import Screen from './Screen';

const menuItems = [
  {
    title: 'My LISTING',
    icon: {
      name: 'format-list-bulleted',
      backgroundColor: colors.primary,
    },
  },
  {
    title: 'My LISTING2',
    icon: {
      name: 'email',
      backgroundColor: colors.secondary,
    },
  },
];
export default function AccountScreen() {
const navigator=useNavigation();

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
            onPress={()=>{navigator.navigate("AccountDetail")}}

          title="Feysel Akmel"
          subTitle="faizfeysel@gmail.com"
          image={require('../assets/chim.png')}
        />
      </View>

      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={menuItem => menuItem.title}

          ItemSeparatorComponent={ListItemSeparator}

          renderItem={({ item }) => (
            <ListItem
            onPress={()=>{navigator.navigate("MessagesScreen")}}

              title={item.title}
              IconComponent={

                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <ListItem
        title="Log Out"
        onPress={()=>{navigator.navigate("LoginScreen")}}
        IconComponent={
          <Icon
            name="logout"
            backgroundColor='#ffe66d'
          />
        }

      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.light
  }
});
