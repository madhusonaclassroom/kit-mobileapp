import React, { Component } from "react";
import { Button,Text ,Image,View,StyleSheet} from "react-native";

export default class welcome extends Component {
  render(){
    return(
  
   
      <View style={{margin:50}}>
      <Image source={require('kit_logo1.jpg')} />
      <Text style={styles.text}>WELCOME TO COMPLAINT SYSTEM</Text>
      
            
        <Button  style={styles.button} title="USER"/>
        <Button  style={styles.button} title="ADMIN"/>
        <Button  style={styles.button} title="SUPERVISOR"/>
        <Button  style={styles.button} title="OFFICIAL"/>
         
      </View>
  );
    }
}

const styles = StyleSheet.create({
  
  text:{
    
    fontWeight:'bold',
    color:'black',
    alignItems:'center',
    justifyContent:'center',
    marginTop:30
    
   
     },
  button:{
   height: 20,
   backgroundColor: 'azure', 
   fontSize: 20,
    margin:50,
    

  }
  
});