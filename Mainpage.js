import React, { Component } from 'react';
import {StyleSheet,Text,View,Button, ImageBackground} from 'react-native';
 
export default class Mainpage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('./assets/background_image.jpg')}  style={styles.backgroundImage}>
          <ImageBackground source={require('./assets/greenboard.png')} style={styles.boardImage}>

          </ImageBackground>
        </ImageBackground>
      </View>
    );
  }
 
  goSub1Screen(){
    this.props.navigation.navigate('Mypage');
    
    console.log("pressed");
  }

}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection: 'column',
  },
  backgroundImage:{
    width: "100%",
    height:"100%",
  },
  boardImage:{
    width:"100%",
    height:"80%",
  }
});
