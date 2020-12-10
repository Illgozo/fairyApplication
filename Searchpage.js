import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {Dimensions, FlatList, StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { HeaderSearchBar } from "react-native-header-search-bar";
import {TouchableOpacity} from 'react-native-gesture-handler';

var isIphone =Dimensions.get('window').height<1000 ? true:false;

export default class Searchpage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontWeight: 'bold', fontSize:isIphone?20:25 }}>Find your favorite fairytale</Text>
        <HeaderSearchBar onChangeText={text => console.log(text)} />
        <FlatList
          data={[
            {key: 'Cinderella'},
            {key: 'Hansel and Gretel'},
            {key: 'The Little Prince'},
            {key: 'Sleeping Beauty'},
            {key: 'Little Red Riding Hood'},
          ]}
          style={{marginVertical: isIphone?"5%":"5%", marginHorizontal: isIphone?"5%":"5%"}}
          renderItem={({item}) => (
          <TouchableOpacity>
          <Text style={styles.item}>{item.key}</Text>
          </TouchableOpacity>
          )}
        />

        <View style={{ height: isIphone?200:400, width: "100%", marginTop: 10 }}>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 7 }}>
                <Text style={{ fontWeight: 'bold', fontSize:isIphone?20:25 }}>Ranking Top 5</Text>
            </View>

            <View style={{ flex: 7 }}>
              <ScrollView
                horizontal={true}>
                  <Image style={styles.RankImage} source={require('./assets/book1.png')}/>
                  <Image style={styles.RankImage} source={require('./assets/book2.jpg')}/>
                  <Image style={styles.RankImage} source={require('./assets/book3.jpg')}/>
                  <Image style={styles.RankImage} source={require('./assets/book4.jpg')}/>
                  <Image style={styles.RankImage} source={require('./assets/book5.jpg')}/>
              </ScrollView>
            </View>
        </View>
      </View>
    );
  }}

  var styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding:"10%"
    },
    item: {
      marginHorizontal:"5%",
      fontSize: isIphone?15:18,
      height: isIphone?30:40,
    },
    RankImage:{
      width: isIphone?100:220,
      height:isIphone?150:320,
      marginRight: 10,
    },
  });