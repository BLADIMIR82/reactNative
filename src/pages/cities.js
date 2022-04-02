import React from "react";
import { StyleSheet, View, ScrollView, TextInput} from 'react-native';
import Footer from "../componets/footer"
import  HeroCities from "../componets/herocities"
import  Cards from "../componets/cards"
import { useEffect } from "react";
import { connect } from 'react-redux';
import citiesActions from "../../redux/actions/citiesAction"

function Cities(props) {

  useEffect(()=>{
    props.fetchearCities()
 
  
  },[]) 

  function filterCards (event) {
    
    props.filtrarCities(props.cities, event)
    
   
  }

    return (
      <ScrollView>
      <View style={styles.container}>
         <HeroCities />
         <View style={styles.containerdos}>
         <TextInput  style={styles.Input}  onChangeText={(text) =>{filterCards(text)} } type="text"  placeholder="Search City !!" /> 
         </View>
        < Cards cities={props.filterCities} />
        <Footer />
      </View>
         
      </ScrollView>   

    );
  }

  const styles = StyleSheet.create({
    container: {
     textAlign:"center",
    },
    containerdos: {
      display:"flex",
      justifyContent:"center",
      textAlign:"center",
     },
    Input: {
      width: 200,
      height:50,
      marginLeft:10,
      borderRadius: 1,
      justifyContent:"center"
    }
  });



const mapDispatchToProps  ={
  fetchearCities:citiesActions.fetchearCities,
  filtrarCities:citiesActions. filtrarCities,

}

const mapStateToProps = (state) =>{
  return{
      cities:state.citiesReducer.cities,
      auxiliar: state.citiesReducer.auxiliar,
      filterCities:state.citiesReducer.filterCities
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cities);
  