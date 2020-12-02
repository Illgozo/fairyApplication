import {createAppContainer, } from 'react-navigation';
import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Mypage from './Mypage';
import Mainpage from './Mainpage';
import Searchpage from './Searchpage';
import SelectCharacterpage from './SelectCharacterpage';


const selectCharacterStack = createStackNavigator(
  {
    Mainpage,
    SelectCharacterpage
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      title: 'Mainpage',
  }),
  initialRouteName: 'Mainpage',
  }
);

const TabNavigator = createBottomTabNavigator({
  Mainpage: selectCharacterStack,
  Searchpage: {
    screen: Searchpage,
  },
  Mypage: {
    screen: Mypage,
  },
},
{
  defaultNavigationOptions: ({navigation}) => ({
    tabBarIcon: ({horizontal}) => {
      const {routeName} = navigation.state;
      let iconName;
      if (routeName === 'Mypage') {
        iconName = 'ios-person';
      } else if (routeName === 'Mainpage') {
        iconName = 'ios-book';
      }else if (routeName === 'Searchpage') {
        iconName = 'ios-search';
      }
      return (
        <Ionicons
          name={iconName}
          size={horizontal ? 28 : 35}
          color='#00bfff'
        />
      );
    },
    tabBarOptions: {
      style: {height:60},
      color:"#f08080",
    }
  }),
},
);

const AppStack = createStackNavigator(
  {
      TabNavigator: {
          screen: TabNavigator,
          navigationOptions: ({navigation}) => ({
              header: null,
          }),
      },
  }
);

export default createAppContainer(AppStack);
