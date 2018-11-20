/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

/**
 * Paleta de cores:
 * 
 * Preto: #07020D
 * Azul: #114B5F
 * Branco: #F1E9DB
 * Branco mais claro: #E8E9F3
 * Verde: #1A936F
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, Image, View, ScrollView, RefreshControl, TouchableOpacity, ImageBackground} from 'react-native';
import { createAppContainer } from "react-navigation";

import Welcome from './home/WelcomeScreen';
import Home from './home/HomeScreen';
import Procurar from './caronas/procurar';
import Oferecer from './caronas/oferecer';
import Login from './home/Login'

const title = "CaronApp";

import AppNavigator from './Navigation/StackNav'
import DrawNavigator from './Navigation/DrawNav';


/*const AppContainer = createAppContainer(DrawNavigator);
export default AppContainer;*/

export default class App extends Component {

  render() {
    return (
      <AppNavigator />
    );
  }
}
