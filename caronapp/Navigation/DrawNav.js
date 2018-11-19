import { DrawerNavigator } from "react-navigation";
//import {SlideBar} from 'react-native';

import Welcome from '../home/WelcomeScreen';
import Home from '../home/HomeScreen';
import {Procurar, Proc} from '../caronas/procurar';
import Oferecer from '../caronas/oferecer';

import AppNavigator from './StackNav';


export default DrawNavigator = DrawerNavigator({
    
    Welcome: Welcome,
    //Home: Home,
    //Procurar: Procurar,
    //drOferecer: Oferecer,
    Procurar: Procurar,
    Oferecer: Oferecer,
  },{
      navigationOptions:{
          header: null,
      }
  }
);

