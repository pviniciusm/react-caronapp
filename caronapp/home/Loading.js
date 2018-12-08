import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, ActivityIndicator } from 'react-native'
import styles from '../styles/styles'
import firebase  from 'react-native-firebase';


export class LoginLoading extends Component {
  
  constructor(props){
      super(props)
      signUpState = this.props.navigation.getParam('signUpState', null)
  }  

  componentDidMount(){
    firebase.auth().onAuthStateChanged(user => {
        signUpState 
          ? 'do nothing'
          : this.props.navigation.navigate(user ? 'Welcome':'Login')
    })
  }
  
  displaySign(){
    return(
      <Text>{signUpState.firstname} and {signUpState.lastname}</Text>
    )
  }

  render() {
    return (
      <View style={[styles.blueBackground, logstyles.container]}>
        <Image style={logstyles.loadimage} source={require('../img/caronapp.png')} />
        <ActivityIndicator size="large" color={styles.whiteText.color} />
        {
          this.displaySign()
        }
      </View>
    )
  }
}

const logstyles = StyleSheet.create({
    container : {
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    },
    loadimage:{
        width:180,
        height:180,
        
    }
});

export default LoginLoading