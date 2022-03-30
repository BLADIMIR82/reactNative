import React from "react";
import { Text, Dimensions, StyleSheet, View, Image } from "react-native";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import cities from "./datos";

const Carr = () => (
  <View style={styles.container}>
    <SwiperFlatList
      autoplay
      autoplayDelay={2}
      autoplayLoop
      index={2}
      showPagination
    >
      {cities.map((evento) => (
        <View style={[styles.child, ]}>
            <Image source={require("../images/logo.png") } style={styles.imagedos}/> 
          <Text style={styles.text}>{evento.name}</Text>
        </View>
      ))}
    </SwiperFlatList>
  </View>
);

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  child: { width, justifyContent: "center" },
  text: { fontSize: width * 0.5, textAlign: "center", fontSize: 20 },
  imagedos: {
    height: 300,
  },
});

export default Carr;
