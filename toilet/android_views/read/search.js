import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Image
  } from 'react-native';

import Util from './../util';


  class Search extends Component{
     render() {
       return (
           <View style={styles.container}>
             <TextInput style={styles.search} placeholder="搜索"
                returnKeyType="search"
                placeholderTextColor="#494949" />
           </View>
       )
     }
  }


const styles = StyleSheet.create({
  container:{
  paddingLeft:10,
  paddingRight:10,
  marginTop:20,
  borderColor:'#ccc',
  height:70
  },
  search: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius:3,
    marginTop:25,
    paddingLeft:10,
    fontSize:15
  }
});


  module.exports = Search;