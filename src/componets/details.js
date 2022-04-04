import * as React from 'react';
import {  View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import { useEffect, useState,   useLayoutEffect } from "react";
import {connect} from "react-redux";
import citiesActions from "../../redux/actions/citiesAction";



function  Details (props){
  
  const [card, setCard] = useState({element:props.cities.find((i)=>i._id.toString()===id.toString())})
  const { id } = route.params
  
  useEffect(()=>{
    if (props.cities.length < 1){

      props.fetchearUnaCiudad(id)
      .then((traerId)=>setCard({element:traerId}))
    }

  },[])

  if (!card.element){
    return (props.cities)
  }


  return (
    <ScrollView>
     
      <View style={styles.Cards} >
          <Image source={{uri: `https://mytinerari-rojas.herokuapp.com/imagenes/${card.element.image}`}} style={styles.image}/>
            <Text style={styles.tittle}>{card.element.name}</Text>
     </View>
      </ScrollView>
);
};

const mapDispatchToProps  ={ 
    fetchearCities:citiesActions.fetchearCities,
    filtrarCities:citiesActions. filtrarCities,
    fetchearUnaCiudad: citiesActions.fetchearUnaCiudad
  
  }
  
  const mapStateToProps = (state) =>{  
    return{
        cities:state.citiesReducer.cities,
        auxiliar: state.citiesReducer.auxiliar,
        filterCities:state.citiesReducer.filterCities,
        itineraries:state.itinerariesReducer.itineraries
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Details)


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