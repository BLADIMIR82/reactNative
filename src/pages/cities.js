import React from "react";
import { View, Text, ScrollView, StyleSheet, ImageBackground, Image,} from "react-native";



export default function  Cities(){
    return (
        <ScrollView style={styles.Hero}>
      
      <View>
        <View>
        <ImageBackground source={require("../images/hero.jpg")} style={styles.image}>
         <Image source={require("../images/logo.png")} style={styles.imagedos}/> 
          <Text style={styles.tittle}> MYtineraries</Text>
          <Text style={styles.tittletwo}>
            Find your perfect trip, designed by insiders who know and love their
                   cities!!
          </Text>
          </ImageBackground> 
        </View>
        
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  Hero: {
    height: 350,
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
  tittle:{
     marginBottom: 10,
     fontSize: 25,
     color: "blue",
     textAlign: "center",
  },
  tittletwo:{
    color: "blue",
    textAlign:"center",
    fontSize: 18,
  },
   image: {
    flex: 1,
    justifyContent: "center",
    height:450,
    padding: 40,
    alignItems: "center",
    textAlign: "center",
  },
  imagedos:{
    height:50,
    width: 50,
    marginBottom:12,
  }
 
});