import React, {useState} from 'react';

import {FlatList, StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import ListItem from '../components/ListItem';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';

const initialMessages = [
  {
    id: 1,
    title: 'Feysel AKmel',
    description: 'Do you know what Rock said ,do u ask who he is he is Dawayne  ohh forgot his last name',
    image: require('../assets/chim.png'),
  },
  {
    id: 2,
    title: "The Rock",
    description: 'you are not tired, You are not Just inspired',
    image: require('../assets/couch.jpg'),
  },
];

export default function MessagesScreen() {
  const [messages, setMessages] = useState(initialMessages);
 const [refreshing, setRefreshing] = useState(false) ;
  const handelDelete = message => {
    //first delete the message from the message
    // second call the server to delete the item
    setMessages(messages.filter(m => m.id !== message.id));
  };

  return (
    <Screen>
      <GestureHandlerRootView>
        <FlatList
          data={messages}
          keyExtractor={messages => messages.id.toString()}
          renderItem={({item}) => (
            <ListItem
              title={item.title}
              subTitle={item.description}
              image={item.image}
              onPress={() => console.log('Message Selected', item)}
              renderRightActions={() => (
                <ListItemDeleteAction onPress={() => handelDelete(item)} />
              )}
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
          refreshing={refreshing}
          onRefresh={() => {
            setMessages([
              {
                id: 2,
                title: 'T4',
                desription: 'refreshing example',
                image: require('../assets/mountain.png'),
              },
            ]);
          }}
        />
      </GestureHandlerRootView>
    </Screen>
  );
}

const styles = StyleSheet.create({});
