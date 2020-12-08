import React, { Component } from 'react';
import {Dimensions, StyleSheet,Text,View,TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

var isIphone =Dimensions.get('window').height<1000 ? true:false;
 
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#87ceeb',
    width: "80%",
    height: "23%",
    marginHorizontal:"10%",
    marginVertical:"20%",
    borderRadius: 30,
  },
  profileText:{
    fontWeight: 'bold', 
    fontSize: 30, 
    marginLeft: "10%", 
    marginTop: "-11%"
  },
  profile:{
    backgroundColor: '#fff5ee',
    width: isIphone?100:200,
    height: isIphone?100:200,
    borderRadius: 100,
    marginLeft:isIphone?"8%":"6%",
    marginTop: isIphone?"-25%":"-18%",
    alignContent:"center",
    justifyContent: 'center',
  },
  profileIcon:{
    width: isIphone?"100%":"70%",
    height: isIphone?"100%":"70%",
    marginHorizontal:"25%"
  },
  profileName:{
    fontWeight: 'bold', 
    fontSize: 50, 
    marginLeft: "54%", 
    marginTop: "19%"
  },
  ModifyPrfileIcon:{
    width: "100%",
    height: "100%",
    marginTop: "-5%",
    marginLeft: "20%"
  },
  MypageButton:{
    backgroundColor: '#87ceeb',
    width:"85%",
    height:"35%",
    marginTop:"10%",
    marginLeft:"8%",
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default class Mypage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.profileText}>Profile</Text>
        <Text style={styles.profileName}>Jamie</Text>
        <View style={styles.profile}>
          <Ionicons style={styles.profileIcon} name="ios-paw" size={120} color='#00bfff'/>
        </View>
        <TouchableOpacity style={styles.MypageButton}>
          <Ionicons style={styles.ModifyPrfileIcon} name="ios-person" size={60} color='#fff5ee'/>
          <Text style={{fontSize: 25, marginLeft: "25%", marginTop: "-15%"}}>Modify Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.MypageButton}>
          <Ionicons style={styles.ModifyPrfileIcon} name="ios-cart" size={60} color='#fff5ee'/>
          <Text style={{fontSize: 25, marginLeft: "25%", marginTop: "-15%"}}>Buy Premium</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.MypageButton}>
          <Ionicons style={styles.ModifyPrfileIcon} name="ios-megaphone" size={60} color='#fff5ee'/>
          <Text style={{fontSize: 25, marginLeft: "25%", marginTop: "-15%"}}>Write Feedback</Text>
        </TouchableOpacity>
        

        

      </View>
    );
  }
}
