import React from "react";
import { View, Text, ScrollView, StyleSheet, ImageBackground, Image,} from "react-native";



export default function  Hero(){
    return (
        <ScrollView >
      
      <View style={styles.Hero}>
        <ImageBackground source={require("../images/hero.jpg")}    style={styles.image}>
         <Image source={require("../images/logo.png")} style={styles.imagedos}/> 
          <Text style={styles.tittle}> MYtineraries</Text>
          <Text style={styles.tittletwo}>
            Find your perfect trip, designed by insiders who know and love their
                   cities!!
          </Text>
          </ImageBackground> 
     
        
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  Hero: {
    display:"flex",
    flexDirection:"column",
    height: 553,
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
  tittle:{
     marginBottom: 10,
     fontSize: 24,
     color: "blue",
     textAlign: "center",
     fontWeight: 'bold',
  },
  tittletwo:{
    color: "blue",
    textAlign:"center",
    fontSize: 17,
    fontWeight: 'bold',
  },
   
  imagedos:{
    height:50,
    width: 50,
    marginBottom:12,
  }
 
});
