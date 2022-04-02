import React from "react";
import { StyleSheet, View, ScrollView, TextInput, Text} from 'react-native';
import Footer from "../componets/footer"
// import  HeroCities from "../componets/herocities"
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
      <Text style={styles.tittletop}>Cities</Text>
         {/* <HeroCities /> */}
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
     backgroundColor:"#EEE8E8"
    },
    containerdos: {
      display:"flex",
      justifyContent:"center",
      textAlign:"center",
     },
    Input: {
      width: 340,
      height:50,
      marginTop: 10,
      marginLeft:10,
      borderRadius: 20,
      backgroundColor:"white",
     
      textAlign:"center",
      marginBottom: 15,
    },
    tittletop:{
      fontSize: 45,
      textAlign:"center",
      color:"black",
      fontWeight: 'bold',
      marginTop: 20,
     
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
  