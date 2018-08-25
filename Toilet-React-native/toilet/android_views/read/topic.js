import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
  } from 'react-native';
import Util from './../util';

  class Topic extends Component{

    constructor(props){
        super(props);
        this.state = {
           data:props.data
        };
    }

     render() {
     var views =[];
     var data = this.state.data;
     for(var i in data){
        views.push(
             <View style={styles.img_item} key={i}>
                 <Image style={styles.img}  source={{uri:data[i].img}}/>
              </View>
        );
     }


       return (
         <View style={styles.container}>
            <View style={styles.tjTitle}>
              <Text style={styles.bigText}>推荐专题</Text>
            </View>
            <View style={styles.img_view}>
             {views}
            </View>
             <View style={styles.tjTQ}>
                <Text style={styles.tjTQText}>查看更多同期专题&gt; </Text>
             </View>
         </View>
       )
     }
  }


const styles = StyleSheet.create({
      container:{
          marginTop:-5,
          marginLeft:10,
          marginRight:10
      },
       img:{
         width:(Util.size.width - 30)/2,
         height:100,
         borderRadius:5
       },
       img_item:{
        height: 100,
          flex:1
       },
       img_view:{
          flexDirection:'row'
       },
         tjTitle:{

         },
         bigText:{
           fontSize:17,
           fontWeight: '300',
           marginBottom: 5
         },
           tjTQ:{
             marginTop:10
           },
           tjTQText:{
             fontWeight: '300',
             fontSize:15,
             color: '#7D7D81'
           }
});


  module.exports = Topic;