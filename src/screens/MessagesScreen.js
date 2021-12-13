import React from "react";
import { View,FlatList,StyleSheet } from "react-native";
import ListItem from "../components/ListItems";
import L from "../components/L";
import Screen from "../components/Screen";
const messages=[
    {
        id:1,
        title:"T1",
        description:"D1",
        image:require("../assets/chim.png")
    },{
        id:2,
        title:"T2",
        description:"D2",
        image:require("../assets/logo.png")
    },
]

function MessagesScreen(props){
    return( 
 <Screen> 
<FlatList 

data={messages}
keyExtractor={message=>message.id.toString()}
renderItem={({item})=>(
<ListItem
title={item.title} 
subTitle={item.description} 
image={item.image} 
/>)}
{...<L/>}

    />
 </Screen>
    );
}
const styles=StyleSheet.create({

});

export default MessagesScreen