import { StackNavigator } from "react-navigation";

import Welcome from '../home/WelcomeScreen';
import Home from '../home/HomeScreen';
import Procurar from '../caronas/procurar';
import Oferecer from '../caronas/oferecer';

//import DrawNavigator from './DrawNav';

export default AppNavigator = StackNavigator({
    //Welcome: DrawNavigator,
    //Dra: DrawNavigator,
    Welcome:Welcome,
    //Dra: DrawNavigator,
    //RWelcome: Welcome,
    //Procurar: Procurar,
    //Oferecer: Oferecer,
  },{
    navigationOptions:{
        header: null,
    }
  }
  );

