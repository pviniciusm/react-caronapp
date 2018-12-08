import { DrawerNavigator } from "react-navigation";
//import {SlideBar} from 'react-native';

import Welcome from '../home/WelcomeScreen';
import Home from '../home/HomeScreen';
import {Procurar, Proc} from '../caronas/procurar';
import Oferecer from '../caronas/oferecer';
import Login from '../home/Login';

import AppNavigator from './StackNav';
import { DrawerContainer } from "./DrawContainer";


export default DrawNavigator = DrawerNavigator({
    Welcome: Welcome,
    Procurar: Procurar,
    Oferecer: Oferecer,
  },{
      contentComponent: DrawerContainer
  }
);

