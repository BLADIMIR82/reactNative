import React from "react";
import { Text, Dimensions, StyleSheet, View, Image, ImageBackground } from "react-native";
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
          <ImageBackground source={require("../images/hero.jpg")} style={styles.imagedos}>
        <View style={[styles.child, ]}>
        {/* <Text>{evento.image}</Text> */}
          <Text style={styles.text}>{evento.name}</Text>
        </View>
        </ImageBackground>
      ))}
    </SwiperFlatList>
  </View>
);

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  child: { width, justifyContent: "center" },
  text: { fontSize: width * 0.5, textAlign: "center", fontSize: 24, backgroundColor: "#FE5436" },
  imagedos: {
    height: 300,
  },
});

export default Carr;
