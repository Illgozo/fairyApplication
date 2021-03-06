import React, { Component } from 'react';
import {Dimensions,Alert,StyleSheet,View, Image,ImageBackground, FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

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
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode:'contain',
    width: isIphone ? 100:180,
    height:isIphone ? 150:250,
  },
  bookContainer: {
    marginHorizontal:isIphone ? "4%":"8%",
    marginVertical:isIphone ? "5%":"10%",
  },
});

const bookArr=[
  {
    idx:"1",
    src:require("./assets/book1.png"),
  },
  {
    idx:"2",
    src:require("./assets/book2.jpg"),
  },
  {
    idx:"3",
    src:require("./assets/book3.jpg"),
  },
  {
    idx:"4",
    src:require("./assets/book4.jpg"),
  },
  {
    idx:"5",
    src:require("./assets/book5.jpg"),
  },
  {
    idx:"6",
    src:require("./assets/book6.jpg"),
  },
  {
    idx:"7",
    src:require("./assets/book7.jpg"),
  },
];

export default class Mainpage extends Component {
  clickBook (idx)
  {
    this.props.navigation.navigate('SelectCharacterpage');
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('./assets/background_image.jpg')}  style={styles.backgroundImage}>
          <ImageBackground source={require('./assets/greenboard.png')} style={styles.boardImage}>
            <FlatList
              keyExtractor={item => item.idx}
              data={bookArr}
              style={styles.bookContainer}
              renderItem={({item}) => (
                <TouchableOpacity onPress={()=> {this.clickBook(item.idx)}}>
                <View
                  style={{
                    flex:1,
                    flexDirection:'column',
                    margin:isIphone ? 5:10,
                  }}>
                    <Image
                      style={styles.imageThumbnail}
                      source={item.src}
                    />
                  </View>
                  </TouchableOpacity>
              )}
              numColumns={3}
            />
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


