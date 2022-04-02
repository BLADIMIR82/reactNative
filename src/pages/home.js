import React from "react";
import { StyleSheet, View, Button, ScrollView} from 'react-native';
import Hero from "../componets/hero"
import Call from "../componets/call"
import Carr from "../componets/carrousel";
import Footer from "../componets/footer"


export default function Home({ navigation }) {
    return (
      <ScrollView>
      <View style={styles.container}>
           <Hero />
           
           <Button
        onPress={() => navigation.navigate('Cities')}
        title="Go to Cities"
        color="#75777A"
        width= "40"
      />
        <Call /> 
        <Carr />
        <Footer />
      </View>
         
      </ScrollView>   

    );
  }

  const styles = StyleSheet.create({
    container: {
     textAlign:"center",
     backgroundColor: "#EEE8E8",
    },
  });
  