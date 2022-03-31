import React from "react";
import { Text, Dimensions, StyleSheet, View,  ImageBackground } from "react-native";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import cities from "./datos";

const Carr = () => (
  <View style={styles.container}>
    <SwiperFlatList
      autoplay
      autoplayDelay={5}
      autoplayLoop
    
      showPagination
     
    >
      {cities.map((evento) => (
          <ImageBackground source={{uri: evento.image}} style={styles.imagedos}>
        <View style={[styles.child, ]}>
          <Text style={styles.text}>{evento.name}</Text>
        </View>
        </ImageBackground>
      ))}
    </SwiperFlatList>
  </View>
);

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: { 
  
     backgroundColor: "gray", 
      height: 350,  
      width: "100%",
      padding: 6,
    
      
    },
  child: { width, justifyContent: "center" },
  text: {textAlign: "center", 
  fontSize: 24, 
  backgroundColor: "#FE5436",
  borderRadius: 2,
   },
  imagedos: {
   height:"100%",
   marginRight: 4,
   
  },
});

export default Carr;
