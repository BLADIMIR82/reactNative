import * as React from 'react';
import {  View, Text, Image, StyleSheet, ScrollView} from 'react-native';

import { useEffect } from "react";
import { connect } from 'react-redux';
import citiesActions from "../../redux/actions/citiesAction";




function  Cards(props){

  useEffect(() => {
    props.fetchearCities()
   
}, [])


  return (
    <ScrollView style={styles.Cards}>
      {props.cities.map((evento) => (
      <View  >
          <Image source={{uri: `https://mytinerari-rojas.herokuapp.com/imagenes/${evento.image}`}} style={styles.image}/>
            <Text style={styles.tittle}>{evento.name}</Text>
           
     </View>
          ))}
      </ScrollView>
);
};


const mapDispatchToProps = {
  fetchearCities:citiesActions.fetchearCities,

}

const mapStateToProps = (state) => {
  return {
    cities:state.citiesReducer.cities,
    auxiliar: state.citiesReducer.auxiliar,

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cards);


const styles = StyleSheet.create({
  Cards: {
    display:"flex",
    maxHeight: "100%",
    width: "100%",
    marginTop: 5,
    backgroundColor:"gray",
   
  },
  image: {
    display:"flex",
    flexDirection:"row",
      height: 200,
      width:"100%",
      marginTop: 1,
  },
  tittle:{
    height: 60,
     fontSize: 30,
     color: "black",
     textAlign: "center",
  },
  
 
});








