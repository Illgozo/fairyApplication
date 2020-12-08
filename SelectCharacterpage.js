import React, { Component } from 'react';
import {Dimensions,TouchableOpacity,Text,StyleSheet,View, Image,ImageBackground} from 'react-native';

var isIphone =Dimensions.get('window').height<1000 ? true:false;

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
    resizeMode:'contain',
    marginTop:"10%",
    marginHorizontal:"6%",
    width:"93%",
    height:"95%",
  },
  bookinfo:{
    backgroundColor: '#faf0e6',
    width:"70%",
    height:"30%",
    marginHorizontal:"12%",
    marginTop:"10%",
    borderRadius: 20,
    flexDirection: 'row',
  },
  imageThumbnail: {
    width:isIphone?100:180,
    height:isIphone?150:250,
    marginLeft:"5%",
    marginVertical:"5%"
  },
  infoContainer:{
    width:"50%",
    height:"80%",
    marginHorizontal:"5%",
    marginVertical:"5%",
    padding:"5%",
    flexDirection: 'column',
    justifyContent: 'center',
  },
  characterSelection:{
    backgroundColor: '#faf0e6',
    width:"70%",
    height:"40%",
    marginHorizontal:"12%",
    marginTop:"7%",
    borderRadius: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  characterButton:{
    backgroundColor: '#87ceeb',
    width:"80%",
    height:"20%",
    margin:"2%",
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default class Mainpage extends Component {
  clickBook (idx)
  {
    this.props.navigation.navigate('SelectCharacterpage');
    Alert.alert(idx);
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('./assets/background_image.jpg')}  style={styles.backgroundImage}>
          <ImageBackground source={require('./assets/greenboard.png')} style={styles.boardImage}>
            <View style={styles.bookinfo}>
                <Image source={require('./assets/book2.jpg')} style={styles.imageThumbnail}/>
                <View style={styles.infoContainer}>
                    <Text style={{ fontWeight: 'bold', fontSize:isIphone?20:25}}>Hanzel and Gretel</Text>
                    <Text style={{ marginTop:"5%",fontSize:isIphone?10:17}}>Wilhelm Grimm (1786.2.24~1859.12.16)</Text>
                </View>
            </View>
            <View style={styles.characterSelection}>
                <Text style={{ fontWeight: 'bold', fontSize:isIphone?15:20, marginBottom:"2%"}}>Select Your Character!</Text>
                <TouchableOpacity style={styles.characterButton}>
                 <Text style={{ fontWeight: 'bold', fontSize:isIphone?20:25}}>Mom</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.characterButton}>
                 <Text style={{ fontWeight: 'bold', fontSize:isIphone?20:25}}>Dad</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.characterButton}>
                 <Text style={{ fontWeight: 'bold', fontSize:isIphone?20:25}}>Witch</Text>
                </TouchableOpacity>
            </View>
          </ImageBackground>
        </ImageBackground>
      </View>
    );
  }
 
}


