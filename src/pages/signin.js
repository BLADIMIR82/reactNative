import React from "react";
import { View, Text, ScrollView, StyleSheet, TextInput, Button } from "react-native";

export default function SignIn(){
    return (
     
      
      <ScrollView style={styles.SignIn}>
      <View>
     <View >
     <Text style={styles.tittle}>Wellcome!! your MyTinerary</Text>
     <TextInput  style={styles.Input}  placeholder="You email" />
     <TextInput  style={styles.Input}  placeholder="Password" />
     <View style={styles.Button}>
     <Button  
     onPress={() => navigation.navigate('Home')}
     title="SignUp"
     color="#75777A"
   
   />
   </View>
     </View>
     </View>   
     
     </ScrollView>
   
  );
};


const styles = StyleSheet.create({
    SignIn:{
    display: "flex",
    alignContent: "center",
    height: 100,
    width: "100%",
    backgroundColor:"#7983E7",
  },
  tittle:{
    fontSize: 24,
    color: "#F8F3F2",
    textAlign: "center",
    paddingTop: 20,
    marginTop:50,
    marginBottom: 30,
 },
 Input: {
  width: 340,
  height:45,
  marginTop: 10,
  marginLeft:10,
  borderRadius: 20,
  backgroundColor:"white",
  textAlign:"center",
  marginBottom: 15,
},
Button: {
  width: "100%",
  height: 60,
  paddingLeft:20,
  paddingRight:20,
  marginTop: 15,
  fontSize: 12,
  
},

});