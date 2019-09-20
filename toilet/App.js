/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Dimensions} from 'react-native';

import ToiletPage from './android_views/toiletPage';
import Read from './android_views/read';
import Setting from './android_views/setting';
import Weather from './android_views/weather';


const deviceW = Dimensions.get('window').width

const basePx = 375

function px2dp(px) {
  return px *  deviceW / basePx
}


export default class App extends Component {
//  state= {
//    selectedTab: 'toilet'
//  };
constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'toilet',
    };
  }

  render() {
    return (
      <TabNavigator style={styles.container}>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'toilet'}
          title="卫生间"
          selectedTitleStyle={{color: "#3496f0"}}
          renderIcon={() => <Image style={styles.icon} source={require("./image/wc.png")} />}
                  renderSelectedIcon={() => <Image style={styles.icon} source={require("./image/wced.png")} />}
          badgeText="1"
          onPress={() => this.setState({selectedTab: 'toilet'})}>
           {this._renderView('toilet')}
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'read'}
          title="阅读"
          selectedTitleStyle={{color: "#3496f0"}}
          renderIcon={() => <Image style={styles.icon} source={require("./image/read.png")} />}
                  renderSelectedIcon={() => <Image style={styles.icon} source={require("./image/readed.png")} />}
          onPress={() => this.setState({selectedTab: 'read'})}>
           {this._renderView('read')}
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'weather'}
          title="天气"
          selectedTitleStyle={{color: "#3496f0"}}
         renderIcon={() => <Image style={styles.icon} source={require("./image/weather.png")} />}
         renderSelectedIcon={() => <Image style={styles.icon} source={require("./image/weathered.png")} />}
          onPress={() => this.setState({selectedTab: 'weather'})}>
          {this._renderView('weather')}
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'setting'}
          title="设置"
          selectedTitleStyle={{color: "#3496f0"}}
          renderIcon={() => <Image style={styles.icon} source={require("./image/setting.png")} />}
                  renderSelectedIcon={() => <Image style={styles.icon} source={require("./image/settinged.png")} />}
          onPress={() => this.setState({selectedTab: 'setting'})}>
           {this._renderView('setting')}
        </TabNavigator.Item>
      </TabNavigator>
    );
  }
    _renderView(moduleName){
      var view = <ToiletPage/>;
      switch (this.state.selectedTab){
        case 'toilet':
          view = <ToiletPage/>;
          break;
        case 'read':
          view = <Read/>;
          break;
        case 'weather':
          view = <Weather/>;
          break;
        case 'setting':
          view = <Setting/>
          break;
        default :
          view = <ToiletPage/>;
          break;
      }
      return view;
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
   icon:{
      width:20,
      height:20
    }
});