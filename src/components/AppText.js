
import React from "react";
import {Platform, StyleSheet, Text} from "react-native";


//or use the object desturctuering using function AppText ({childern}) and use in onnly by typing children
function AppText ({children,style}){
    return(<Text style={[styles.text,style]}>{children}</Text>);

}

const styles=StyleSheet.create({
text:{
    fontSize:18,
    fontFamily:Platform.OS==="android"?"roboto":"Avenir"
}


});

export default AppText;