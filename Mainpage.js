import React, { Component } from 'react';
import {Text,View,Button} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
 
export default class Mainpage extends Component {
  render() {
    return (
      <View>
        <Text>Main22</Text>
        <Button onPress={() =>this.props.navigation.navigate('Mypage')} title='Mypage'/>
      </View>
    );
  }
 
  goSub1Screen(){
    this.props.navigation.navigate('Mypage');
    
    console.log("pressed");
  }
}
