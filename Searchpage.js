import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { HeaderSearchBar } from "react-native-header-search-bar";

export default class Searchpage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontWeight: 'bold' }}>Find your favorite fairytale</Text>
        <HeaderSearchBar onChangeText={text => console.log(text)} />
        <StatusBar style="auto" />
        <FlatList
          data={[
            {key: 'Cinderella'},
            {key: 'Hansel and Gretel'},
            {key: 'The Little Prince'},
            {key: 'Sleeping Beauty'},
            {key: 'Little Red Riding Hood'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />

        <View style={{ height: 400, width: 400, marginTop: 10 }}>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 7 }}>
                <Text style={{ fontWeight: 'bold' }}>Ranking Top 5</Text>
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
      alignItems: 'center', 
      marginTop: 150,
    },
    item: {
      padding: 10,
      marginRight: 95,
      fontSize: 18,
      height: 40,
    },
    RankImage:{
      width: 220,
      height: 320,
      marginRight: 10,
    },
  });