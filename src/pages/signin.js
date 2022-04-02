import React from "react";
import { View, Text, ScrollView, StyleSheet, ImageBackground} from "react-native";

export default function SignIn(){
    return (
     
      
        <ScrollView style={styles.SignIn}>
         <View>
        <View >
        <Text style={styles.tittle}> 
            page under development</Text>
        </View>
        </View>   
        
        </ScrollView>
   
  );
};


const styles = StyleSheet.create({
    SignIn:{
    display: "flex",
    alignContent: "center",
    height: 100,
    width: "100%",
    backgroundColor:"#5D5B5A",
  },
  tittle:{
    fontSize: 40,
    color: "#F8F3F2",
    textAlign: "center",
    paddingTop: 10,
 },
 
});