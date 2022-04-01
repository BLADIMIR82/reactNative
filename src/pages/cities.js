import React from "react";
import { StyleSheet, View, ScrollView} from 'react-native';
import Footer from "../componets/footer"
import  HeroCities from "../componets/herocities"
import  Cards from "../componets/cards"
export default function Cities() {
    return (
      <ScrollView>
      <View style={styles.container}>
         <HeroCities />
        < Cards />
        <Footer />
      </View>
         
      </ScrollView>   

    );
  }

  const styles = StyleSheet.create({
    container: {
     textAlign:"center",
    },
  });
  