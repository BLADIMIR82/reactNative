import React from "react";
import { View, Text, ScrollView, StyleSheet, ImageBackground} from "react-native";

export default function Footer(){
    return (
     
      
        <ScrollView style={styles.footer}>
         <View>
        <View >
        <Text style={styles.tittle}> © 2022 Copyright | Bladimir Rojas | MindHub</Text>
        </View>
        </View>   
        
        </ScrollView>
   
  );
};


const styles = StyleSheet.create({
  footer:{
    display: "flex",
    alignContent: "center",
    height: 48,
    width: "100%",
    backgroundColor:"gray",
  },
  tittle:{
    fontSize: 15,
    color: "black",
    textAlign: "center",
    paddingTop: 10,
 },
 
});