
import React from "react";
import {Platform, StyleSheet, Text, View} from "react-native";
import colors from "../config/colors";


//or use the object desturctuering using function AppText ({childern}) and use in onnly by typing children
function L(){
    return(<View style={{
        width:100,
        height:100,
        backgroundColor:colors.black
    }} />);

}


export default L;