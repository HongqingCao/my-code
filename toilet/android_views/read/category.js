/*分类组件*/

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
  } from 'react-native';

import Util from './../util';
import List from './list';


  class Category extends Component{

       constructor(props){
            super(props);
            this.state = {
               data:props.data
            };
        }
     render() {
       var data = this.state.data;
       var viewOne =[];
       var viewTow = [];
       for (i in data){
         var  item =(
           <TouchableOpacity style={styles.item} key = {i} onPress={this._showList}>
            <Text style={styles.title}>{data[i].text}</Text>
          </TouchableOpacity>
        )
        if(i<2){
           viewOne.push(item);
        }else{
           viewTow.push(item);
        }
     }

       return (
         <View style={styles.container}>
            <View>
              <Text style={styles.bigText}>分类</Text>
            </View>
              <View style={styles.row}>
                 {viewOne}
              </View>
              <View style={styles.row}>
                  {viewTow}
              </View>
         </View>
       )
     }
     _showList(){
         alert(1);
     }
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft:10,
    marginRight:10
  },
   bigText:{
       fontSize:17,
       fontWeight: '300',
       marginBottom: 5
     },
   row:{
     flexDirection: 'row',
     marginTop:10
   },
   item:{
     height: 70,
     width:(Util.size.width -40)/2,
     borderWidth: Util.pixel,
     borderColor: '#ccc',
     justifyContent: 'center',
     alignItems: 'center',
     flex:1,
     borderRadius: 3,
     marginLeft:10
   },
    title:{
       fontSize:17,
       fontWeight:'300'
     },
});


  module.exports = Category;