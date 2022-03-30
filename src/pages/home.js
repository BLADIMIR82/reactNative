import React from "react";
import { StyleSheet, View, ScrollView} from 'react-native';
import Hero from "../componets/hero"
import Call from "../componets/call"
import Carr from "../componets/carrousel";


export default function Home() {
    return (
      <ScrollView>
      <View style={styles.container}>
           <Hero />
        <Call /> 
        <Carr />
      </View>
         
      </ScrollView>   

    );
  }

  const styles = StyleSheet.create({
    container: {
     textAlign:"center",
    },
  });
  