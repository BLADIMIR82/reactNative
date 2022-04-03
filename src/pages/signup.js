import React from "react";
import { View, Text, ScrollView, StyleSheet, TextInput, Button } from "react-native";

export default function SignUp({ navigation }){
    return (
     
      
        <ScrollView style={styles.SignUp}>
         <View>
        <View >
        <Text style={styles.tittle}>Create your MyTinerary account !!t</Text>
        <TextInput  style={styles.Input}  placeholder="You First Name" />
        <TextInput  style={styles.Input}  placeholder="You First Lastname" />
        <TextInput  style={styles.Input}  placeholder="You email" />
        <TextInput  style={styles.Input}  placeholder="Password" />
        <TextInput  style={styles.Input}  placeholder="Avatar" />
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
    SignUp:{
    display: "flex",
    alignContent: "center",
    height: 90,
    width: "100%",
    backgroundColor:"#7983E7",
  },
  tittle:{
    fontSize: 25,
    color: "#F8F3F2",
    textAlign: "center",
    paddingTop: 10,
    marginTop:25,
    marginBottom: 30,
 },
 Input: {
  width: 340,
  height:45,
  marginTop: 5,
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