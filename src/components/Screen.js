


import React from "react";
import { StyleSheet,StatusBar,View, SafeAreaView } from "react-native";

function Screen({children}){
    return(
        <SafeAreaView style={styles.screen}>
            {children}
        </SafeAreaView>
    );
}
const styles=StyleSheet.create({
    screen:{
        // paddingTop:StatusBar.currentHeight
    }
});
export default Screen;