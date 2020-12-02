// Sub1Screen.js
import React, { Component } from 'react';
import {StyleSheet,Text,View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
 
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#87ceeb',
    width: "80%",
    height: "20%",
    marginHorizontal:"10%",
    marginTop:"15%",
    borderRadius: 30,
  },
  profile:{
    backgroundColor: '#fff5ee',
    width: 160,
    height: 160,
    borderRadius: 100,
    marginVertical:"5%",
    marginHorizontal:"5%",
    alignContent:"center"
  },
});

export default class Mypage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.profile}>
          <Ionicons
            name={"ice-cream-outline"}
            size={100}
            color='#00bfff'
          />
        </View>
      </View>
    );
  }
}

