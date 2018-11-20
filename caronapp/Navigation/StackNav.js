import { StackNavigator } from "react-navigation";

import Welcome from '../home/WelcomeScreen';
import Home from '../home/HomeScreen';
import Procurar from '../caronas/procurar';
import Oferecer from '../caronas/oferecer';

import Login from '../home/Login';
import DrawNavigator from './DrawNav';

export default AppNavigator = StackNavigator({
  Login:Login,  
  Welcome: DrawNavigator,
  },{
    headerMode:'none'
  }
  );

