import {createAppContainer} from 'react-navigation';
import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Mypage from './Mypage';
import Mainpage from './Mainpage';
import Searchpage from './Searchpage';

const TabNavigator = createBottomTabNavigator({
  Mainpage: {
    screen: Mainpage,
    color:'#f08080',
  },
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
export default createAppContainer(TabNavigator);