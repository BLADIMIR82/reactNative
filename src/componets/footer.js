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
    height: 50,
    width: "100%",
    backgroundColor:"#5D5B5A",
  },
  tittle:{
    fontSize: 15,
    color: "#F8F3F2",
    textAlign: "center",
    paddingTop: 10,
 },
 
});