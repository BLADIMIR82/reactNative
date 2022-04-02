import React from "react";
import { View, Text, ScrollView, StyleSheet, ImageBackground} from "react-native";

export default function Call(){
    return (
        <ScrollView style={styles.call}>
      
    
        <View style={styles.call}>
        <ImageBackground source={require("../images/call.jpg")} style={styles.image}>
          <Text style={styles.tittletwo}>
          Come with us and discover the most beautiful cities in the world!
          </Text>
          </ImageBackground> 
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  call: {
    display:"flex",
    flexDirection:"column",
    height: 530,
    width: "100%",
  },
  image: {
    flex: 1,
    width:"100%",
    alignItems: "center",
    resizeMode:"cover",
    justifyContent: "center",
    backgroundColor: "#EEE8E8",
  },
  tittletwo:{
  color: "blue",
  fontWeight: 'bold',
  fontSize: 18,
   paddingBottom: 100,
   textAlign:"center",
  }
 
});
