import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
   Image,
    Navigator
  } from 'react-native';
import Topic from './read/topic';
import List from './read/list';
import Recommend from './read/recommend';
import Search from './read/search';
import Category from './read/category';
import Util from './util';

  class Read extends Component{
    constructor(props){
       super(props);
       this.state = {
          isShow:false
       }
    }
     render() {
       return (
         <View style={styles.container}>
           <Search/>
           <HrLine/>
           {
           this.state.isShow?
            <ScrollView  style={styles.container}>
                <Topic data={this.state.recommendTopic}/>
                <HrLine/>
                <Recommend name="热门推荐" data={this.state.hotTopic}/>
                <HrLine/>
                <Category data={this.state.category}/>
                <HrLine/>
                <Recommend name="清新一刻" data={this.state.other}/>
             </ScrollView>
             :null
           }
         </View>
       )
     }

     //TODO:
      componentDidMount(){

         var that = this;
         Util.get('http://39.108.146.251:3000/data/read?type=config',function(data){
              if(data.status === 1){
                 let obj = data.data;
                 that.setState({
                      isShow:true,
                      recommendTopic: obj.recommendTopic,
                      hotTopic: obj.hotTopic,
                      category: obj.category,
                      other: obj.other
                  });
              }else{
                 alert('服务异常,正在紧急修复,请耐心等待');
              }
         },function(err){
              alert(err);
              alert('服务异常,正在紧急修复,请耐心等待2');
         });
       }
  }

//横线
class HrLine extends Component{
  render(){
    return (
      <View style={styles.hr}></View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  hr:{
      borderWidth: 1,
      borderColor: '#ccc',
      marginTop:20,
      marginBottom:10
    }
});


  module.exports = Read;