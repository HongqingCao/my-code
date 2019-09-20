import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  WebView
  } from 'react-native';

class comWebView extends Component{
  constructor(props){
    super(props);
    this.state = {
      url: this.props.url,
       isShowErrorPage: false
//      isMargin: this.props.isMargin,
//      isNearBy: this.props.isNearBy,
//      isWeather: this.props.isWeather
    };
  }
  render(){
    let url = {uri: this.state.url};
       return (
            <View style={styles.container}>
                {
                  this.state.isShowErrorPage?
                    <View style={styles.textView}>
                      <Text style={styles.text}>不好意思,请检查网络连接情况或者报告错误</Text>
                    </View>
                    :
                    <WebView
                      startInLoadingState={true}
                      source={url}>
                      onError={this._loadError.bind(this)}
                    </WebView>
                }
              </View>
       )
    }

      _loadError(){
        this.setState({
          isShowErrorPage: true
        });
      }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
   text:{
      fontSize:16,
      fontWeight:'300'
    },
    textView:{
    flex: 1,
      justifyContent:'center',
      alignItems: 'center'
    }
});

    module.exports = comWebView;