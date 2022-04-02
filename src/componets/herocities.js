import React from "react";
import { View, ScrollView, StyleSheet, ImageBackground, } from "react-native";



export default function  HeroCities(){
    return (
        <ScrollView style={styles.Hero}>
      
      <View>
        <View>
        <ImageBackground source={require("../images/imagecities.jpg")} style={styles.image}>
        
          </ImageBackground> 
        </View>
      </View>
     
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  Hero: {
    height: 230,
    width: "100%",
    marginTop: 5,
   
  },
  image: {
    flex: 1,
    justifyContent: "center",
    height:450,
    padding: 40,
    alignItems: "center",
   
  },
 
 
});