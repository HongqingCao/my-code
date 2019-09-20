import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  WebView
  } from 'react-native';

import ComWebView from './comWebView';

  class ToiletPage extends Component{
     render() {
       return (
         <View style={styles.container}>
           <ComWebView url="http://39.108.146.251:8085"/>
         </View>
       )
     }
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
//    justifyContent: 'center',
//    alignItems: 'center',
//    backgroundColor: '#F5FCFF',
  },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
});


  module.exports = ToiletPage;