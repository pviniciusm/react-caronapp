import { StackNavigator } from "react-navigation";

import Welcome from '../home/WelcomeScreen';
import Home from '../home/HomeScreen';
import Procurar from '../caronas/procurar';
import Oferecer from '../caronas/oferecer';

import Login from '../home/Login';
import DrawNavigator from './DrawNav';
import { LoginLoading } from "../home/Loading";
import { signUpScreen } from "../home/SignUp";

export default AppNavigator = StackNavigator({
  
  Login:Login,  
  Welcome: DrawNavigator,
  SignUp: signUpScreen,
  Loading: LoginLoading
  },{
    headerMode:'none'
  }
);

