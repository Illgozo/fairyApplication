import React, { Component } from 'react';
import {StyleSheet,View, Image,ImageBackground, FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

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
    marginTop:"10%",
    marginLeft:"5%",
    width:"95%",
    height:"95%",
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode:'contain',
    width:190,
    height:250,
  },
  bookContainer: {
    marginHorizontal:"8%",
    marginVertical:"10%",
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
                <TouchableOpacity>
                <View
                  style={{
                    flex:1,
                    flexDirection:'column',
                    margin:10
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

