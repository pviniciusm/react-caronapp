import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Alert } from 'react-native'
import { TextInput } from 'react-native-paper';
import { Button, Icon } from 'react-native-elements';

import styles from '../styles/styles';
import firebase from 'react-native-firebase';

export class signUpScreen extends Component {

  constructor(props){
    super(props)

    exampleState = {
        firstname:'Paulo',
        lastname:'Cardoso',
        email:'pvinicsm@gmail.com',
        pass:'123456798',
        birthday:'',
        phone:'5555996170142',
        errormsg:'No failures',
        loading:false,
    }

    exampleOrNot = true

    this.ref = firebase.firestore().collection('users')

    this.state = exampleOrNot
    ? exampleState 
    : {
        firstname:'',
        lastname:'',
        email:'',
        pass:'',
        birthday:'',
        phone:'',
        errormsg:'No failures',
        loading:false,
    }

    firebase.auth().onAuthStateChanged(user => {
        !user 
          ? 'do nothing'
          : this.props.navigation.navigate('Welcome')
    })
  }  

    checkAndSignUp = () => {
        this.setState({loading: true})
        const { firstname, lastname, email, pass, phone } = this.state
        userData = {
            firstname,
            lastname,
            email,
            phone,
            profileImage:"",
        };

        if(!firstname || !lastname || !email || !pass){
            this.alertEmptyFields()
            this.setState({loading: false})
            return
        }

        try {
            firebase.auth().createUserWithEmailAndPassword(email, pass)
                .then((user) => {                    
                    user = firebase.auth().currentUser
                    this.ref.doc(user.uid).set(userData)
                    this.setState({errormsg: user.email})
                })
                .catch(error => {
                    switch (error.code) {
                        case 'auth/email-already-in-use':
                            this.alertAlreadyRegistered()
                            this.setState({loading: false})
                            break;
                        default:
                            this.alertSomeError()
                            this.setState({loading: false})
                            break;
                    }
                })
        } catch (error) {
            this.setState({errormsg:'OUTRO TIPO DE ERRO'})
            this.setState({loading: false})
            this.alertSomeError()
        } 

        
    }

    loginButtonMessage = () => {
        return this.state.loading
            ? 'Registrando...'
            : 'Registre-se!!'
    }


    alertEmptyFields = () => {
        Alert.alert(
            'There is an error!!',
            'Fill all required fields and try again'
        )
    }

    alertSomeError = () => {
        Alert.alert(
            'There is an error!!',
            'Please try again.'
        )
    }

    alertAlreadyRegistered = () => {
        Alert.alert(
            'You are already registered!!',
            'Try to login or retrieve your password.',
            [
                {text: 'Cancel', style:'cancel'},
                {text: 'Login', onPress: () => {this.props.navigation.navigate('Login')}},
                {text: 'Retrieve', onPress: () => {this.props.navigation.navigate('Retrieve')}}
                
            ]
        )
    }

  render() {
    return (
      
      <View style={[styles.container, styles.blueBackground, {justifyContent:'flex-start'}]}>
        
        <View style={{flexDirection:'column', marginTop:'15%'}}>
            <View style={{alignItems:'center', marginBottom:10}}>
                <Text style={[styles.whiteText,styles.titleFontFamily,{fontSize:50}]}>CaronAPP</Text>
                <Text style={[styles.whiteText,styles.titleBody,{fontSize:14}]}>Faça seu cadastro!!</Text>
            </View>
        </View>
        
        
        <View style={{flexDirection:'column', alignItems:'center', width:'100%', padding:30}}>
            <View style={{width:'100%', paddingHorizontal:'5%'}}>
                <TextInput
                    label="First Name"  
                    placeholder="First Name"
                    ref="fn"
                    onChangeText={firstname => {this.setState({ firstname })}}
                    onSubmitEditing={()=>{this.refs.ln.focus()}}
                    value={this.state.firstname}
                    //mode="outlined"
                    underlineColor="#AAA"
                    style={[styles.blueBackground, styles.whiteText, {fontSize:20}]}
                    theme={{ colors: { primary: styles.whiteAltText.color, text: styles.whiteText.color, placeholder: "#999" }}}
                />
            </View>

            <View style={{width:'100%', paddingHorizontal:'5%'}}>
                <TextInput
                    label="Last Name"  
                    placeholder="Last Name"
                    ref="ln"
                    onChangeText={lastname => {this.setState({ lastname })}}
                    onSubmitEditing={()=>{this.refs.eml.focus()}}
                    value={this.state.lastname}
                    //mode="outlined"
                    underlineColor="#AAA"
                    style={[styles.blueBackground, styles.whiteText, {fontSize:20}]}
                    theme={{ colors: { primary: styles.whiteAltText.color, text: styles.whiteText.color, placeholder: "#999" }}}
                />
            </View>

            <View style={{width:'100%', paddingHorizontal:'5%'}}>
                <TextInput
                    label="E-mail"  
                    placeholder="E-mail"
                    ref="eml"
                    onChangeText={email => {this.setState({ email })}}
                    onSubmitEditing={()=>{this.refs.cfp.focus()}}
                    value={this.state.email}
                    //mode="outlined"
                    underlineColor="#AAA"
                    style={[styles.blueBackground, styles.whiteText, {fontSize:20}]}
                    theme={{ colors: { primary: styles.whiteAltText.color, text: styles.whiteText.color, placeholder: "#999" }}}
                />
            </View>

            <View style={{width:'100%', paddingHorizontal:'5%'}}>
                <TextInput
                    label="Password"  
                    placeholder="Password"
                    ref="cfp"
                    onChangeText={pass => {this.setState({ pass })}}
                    onSubmitEditing={()=>{this.refs.pn.focus()}}
                    value={this.state.pass}
                    underlineColor="#AAA"
                    style={[styles.blueBackground, styles.whiteText, {fontSize:20}]}
                    theme={{ colors: { primary: styles.whiteAltText.color, text: styles.whiteText.color, placeholder: "#999" }}}
                    secureTextEntry={true}
                />
            </View>
            <View style={{width:'100%', paddingHorizontal:'5%'}}>
                <TextInput
                    label="Phone Number"  
                    placeholder="Phone Number"
                    ref="pn"
                    onChangeText={phone => {this.setState({ phone })}}
                    //onSubmitEditing={()=>{}}
                    value={this.state.phone}
                    underlineColor="#AAA"
                    style={[styles.blueBackground, styles.whiteText, {fontSize:20}]}
                    theme={{ colors: { primary: styles.whiteAltText.color, text: styles.whiteText.color, placeholder: "#999" }}}
                />
            </View>

            <TouchableOpacity
                disabled={this.state.loading}
                onPress={() => this.checkAndSignUp()}
                style={[this.state.loading ? styles.blueAltBackground : styles.greenBackground, {flexDirection:'row', marginTop:25,alignItems:'center', justifyContent:'center', width:'68%', padding:10, paddingLeft:20, paddingRight:20}]}>
                
                <Text style={[styles.whiteText, styles.titleFontFamily,{fontSize:24}]}>
                    {this.loginButtonMessage()}
                </Text>
            </TouchableOpacity>

        </View>
        
      </View>
    )
  }
}

export default signUpScreen
