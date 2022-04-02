import React from "react";
import { Text, Dimensions, StyleSheet, View,  ImageBackground, Button} from "react-native";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import cities from "./datos";

const Carr = ({ navigation }) => (

<>
    <Text  style={styles.tittletop}>Popular MYtineraries</Text>
  <View style={styles.container}>
    <SwiperFlatList
      autoplay
      autoplayDelay={5}
      autoplayLoop
    
     
    >
      {cities.map((evento, index) => (
          <ImageBackground key={index} source={{uri: evento.image}} style={styles.imagedos}>
        <View style={[styles.child, ]}>
          <Text style={styles.text}>{evento.name}</Text>
        </View>
        </ImageBackground>
      ))}
    </SwiperFlatList>
  </View>
  </>
);

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: { 
     backgroundColor: "black", 
      height: 484,  
      width: "100%",
      padding: 10,
    
    },
  
  child: { width, justifyContent: "center",  },
  text: {textAlign: "center", 
  fontSize: 24,
  borderTopRightRadius: 20,
  backgroundColor: "#75777A",
  color:"white",
  
   },
  imagedos: {
   height:"100%",
   marginRight: 4,
   borderTopRightRadius: 20,
   
   
  },
  tittletop:{
    fontSize: 28,
    textAlign:"center",
    color:"white",
    backgroundColor: "#75777A"
  }
});

export default Carr;
