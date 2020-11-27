
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack';
import Mainpage from './Mainpage'
import Mypage from './Mypage'
 
const App = createStackNavigator({
  Main : {
    screen : Mainpage,
    navigationOptions: {
      title: 'Main',
    }
  },
  Mypage : {
    screen : Mypage,
    navigationOptions: {
      title: 'Mypage',
    }
  },
}
);

export default createAppContainer(App);
