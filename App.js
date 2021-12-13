import React from 'react';



import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function App() {
  
  function handelPress(params) {
    return console.log("fgfhgfh")
  }
 

 return (
    <View style={stylea.container}>
      <Text onPress={handelPress}>Hello React Natic</Text>
      <TouchableOpacity onPress={handelPress}>
        <Image
          source={{
            width: 200,
            height: 200,
            uri: 'https://picsum.photos/200/300',
          }}
        />
      </TouchableOpacity>
    </View>
  );
}
const stylea = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
