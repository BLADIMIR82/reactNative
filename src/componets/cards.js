import * as React from 'react';
import {  View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';



export default function  Cards(props){

  return (
    <ScrollView>
      {props.cities?.length !== 0?(props.cities.map((evento, index) => (
        <TouchableOpacity style={styles.Cards}  key={index} 
        onPress={()=>props.navigation.navigate('Cities', {id:evento._id})}>  
        {console.log(props)}   
          <Image source={{uri: `https://mytinerari-rojas.herokuapp.com/imagenes/${evento.image}`}} style={styles.image}/>
            <Text style={styles.tittle}>{evento.name}</Text>
     </TouchableOpacity>
          ))): <Text style={styles.tittledos}>Sorry we did not find the city you are looking for!!</Text>}
      </ScrollView>
);
};


const styles = StyleSheet.create({
  Cards: {
    display:"flex",
    maxHeight: "100%",
    width: "100%",
    paddingRight:12,
    paddingLeft:12,
    marginTop: 5,
    marginBottom:2,
    alignItems:"center",
   
  },
  image: {
    display:"flex",
    flexDirection:"row",
      height: 200,
      width:"100%",
      marginTop: 1,
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20
  },
  tittle:{
     height: 60,
     width:"100%",
     fontSize: 30,
     color: "white",
     textAlign: "center",
     backgroundColor:"#75777A"
  },
  tittledos:{
    height: 150,
    width:"100%",
    fontSize: 30,
    color: "white",
    textAlign: "center",
    backgroundColor:"#7B7878"
 },
 
});








