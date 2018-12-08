import React, { Component } from 'react'
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native'
import { NavigationActions } from 'react-navigation';
import firebase from 'react-native-firebase';
import styles from '../styles/styles';

export class DrawerContainer extends Component {

    constructor(){
        super() 

        this.state = {
            user: null,
        }
    }

    componentDidMount(){
        this.listener = firebase.auth().onAuthStateChanged(user => {
            user 
                ? this.setState({ user })
                : this.setState({ user: null })
        })
    }

    logout = async() => {
      if(this.state.user)
        await firebase.auth().signOut();
    }

    
    componentWillUnmount(){
        this.listener();
    }

  render() {
    const { navigation } = this.props
    return (
      <View style={ofstyles.container}>
        <Text
          onPress={() => navigation.navigate('Welcome')}
          style={ofstyles.uglyDrawerItem}>
          Screen 1
        </Text>
        <Text
          onPress={() => navigation.navigate('Procurar')}
          style={ofstyles.uglyDrawerItem}>
          Screen 2
        </Text>
        <Text
          onPress={() => navigation.navigate('Oferecer')}
          style={ofstyles.uglyDrawerItem}>
          Screen 3
        </Text>
        <TouchableOpacity onPress={() => this.logout()}>
            <Text>Log out</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const ofstyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f6f6f6',
      paddingTop: 40,
      //paddingHorizontal: 20
    },
    uglyDrawerItem: {
      fontSize: 18,
      fontWeight: 'bold',
      color: styles.blueText.color,
      padding: 15,
      paddingHorizontal:25,
      borderRadius: 2,
      borderColor: styles.blackText.color,
      borderBottomWidth: 1,
      //textAlign: 'center'
    }
  })

export default DrawerContainer