import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
  } from 'react-native';
import Util from './../util';

  class Recommend extends Component{
     constructor(props){
          super(props);
          this.state = {
             data:props.data,
             name:props.name
          };
      }
     render() {
     var data = this.state.data;
     var viewOne=[];
     var viewTow=[];
     for (i in data){
     let item = (
          <View style={styles.img_item} key={i}>
             <Image style={[styles.img,styles.shadow]}  source={{uri:data[i].img}}/>
             <Text numberOfLines={2}>{data[i].title}</Text>
           </View>
     );
        if(i<4){
           viewOne.push(item);
        }else{
           viewTow.push(item);
        }
     }


       return (
         <View style={styles.container}>
           <View>
              <Text style={styles.bigText}>{this.state.name}</Text>
           </View>
           <View style={styles.img_view}>
              {viewOne}
           </View>
           <View style={styles.img_view}>
              {viewTow}
            </View>
         </View>
       )
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
  img_view:{
    flexDirection: 'row'
  },
  img_item:{
    flex:1,
    height:160
  },
  img:{
    height:120,
    width:(Util.size.width -40)/4
  },
  shadow:{
    shadowOpacity: 1,
    shadowColor: '#ccc',
    shadowOffset:{width: 1*Util.pixel, height: Util.pixel}
  }
});


  module.exports = Recommend;