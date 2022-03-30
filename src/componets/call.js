import React from "react";
import { View, Text, ScrollView, StyleSheet, ImageBackground} from "react-native";

export default function Call(){
    return (
        <ScrollView style={styles.call}>
      
      <View>
        <View>
        <ImageBackground source={require("../images/call.jpg")} style={styles.image}>
          <Text style={styles.tittletwo}>
          Come with us and discover the most beautiful cities in the world!
          </Text>
          </ImageBackground> 
        </View>
        
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  call: {
    height: 400,
    width: "100%",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    height:430,
    padding: 40,
    alignItems: "center",
  },
  tittletwo:{
  color: "blue",
  fontSize: 18,
   paddingBottom: 100,
   textAlign:"center",
  }
 
});
