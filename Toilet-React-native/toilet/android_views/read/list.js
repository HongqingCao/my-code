import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
  } from 'react-native';

import Util from './../util';


  class List extends Component{
     render() {
       return (
         <View style={styles.container}>
            <View  style={styles.item}>
               <View>
                 <Image style={styles.img}/>
               </View>
               <View style={styles.text}>
                 <Text  style={styles.title}>标题</Text>
                 <Text style={styles.name}>标题</Text>
               </View>
             </View>
         </View>
       )
     }
  }


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item:{
    height:78,
    paddingLeft:10,
    paddingRight:10,
  },
  text:{
    marginLeft:7
  },
    img:{
      height:60,
      width:60,
      marginLeft:10,
      marginTop:5,
      borderWidth:Util.pixel,
      borderRadius:3,
      borderColor:'#fff'
    },
   name:{
        fontSize:14,
        color: '#ccc',
        marginTop:10
      }
});


  module.exports = List;