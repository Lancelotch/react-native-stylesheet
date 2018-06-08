/*
  Candra Darmawan
  email : chandra.souvenir@gmail.com
  Example of State in React Native Cli. V.2.0.1
*/

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class App extends Component{
  render(){
    return(
      <View style={style.container}>
        <Text style={style.text1}>Candra</Text>
        <Text style={style.text2}>Darmawan</Text>
      </View>
    );
  }
}
//Create depedency StyleSheet
const style = StyleSheet.create({
  container:{
    //look for more properties in doc
    marginTop:10,
    marginLeft:20,
    marginRight:20,
    borderWidth : 1,
    backgroundColor : 'red'
  },
  text1:{
    margin : 10,
    color:'green',
    fontSize : 20
  },
  text2:{
    margin : 10,
    color:'yellow',
    fontSize : 20
  }
})
