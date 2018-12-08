import React, { Component } from 'react'
import { Alert, StatusBar, StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native'
import styles from '../styles/styles'
import { Button, Icon } from 'react-native-elements';
import { TextInput } from 'react-native-paper';
import firebase from 'react-native-firebase';
import Welcome from './WelcomeScreen';


export class LoginScreen extends Component {

    constructor(){
        super()

        this.state = {
            email: '',
            password: '',
            isAuth: false,
            loading: false,
        }
    }

    componentWillMount(){
        firebase.auth().onAuthStateChanged(user => {
            this.setState({isAuth: user})
            this.props.navigation.navigate(user ? 'Welcome':'Login')
        })
    }
  
    login = async() => {
        
        const { email, password } = this.state;

        try{
            console.log('vamos verificar email e senha')
            if(!(email && password)){
                throw new Error()
            }

            this.setState({loading:true})
            
            const user = await firebase.auth()
                .signInWithEmailAndPassword(email, password);
            this.setState({isAuth: true})
            this.props.navigation.navigate('Welcome')  
        } catch(err){
            this.showAlert()
        } finally {
            this.setState({loading:false})
        }   
    }

    showAlert = () => {
        Alert.alert(
            'Senha ou e-email errados.'
        )
    }


  render() {

    if(this.state.isAuth){
        //this.props.navigation.navigate('Loading')
        return <Welcome />;
    } 

    return (
      
      <View style={[{flex:1, flexDirection:'column', justifyContent:'space-between', alignItems:'center'}, ofstyles.container]}>
        <StatusBar
            backgroundColor={styles.blueBackground.backgroundColor}
            barStyle="light-content"
            animated={true}
        />
   
        <View />
        
        <View style={{flexDirection:'column'}}>
            <View style={{alignItems:'center', marginBottom:40}}>
                <Text style={[styles.whiteText,styles.titleFontFamily,{fontSize:50}]}>CaronAPP</Text>
            </View>
            <View style={[ofstyles.loginbox, styles.whiteBackground]}>
                
                {/* E-mail entry */}
                <View style={{flexDirection:'row', alignItems:'center',justifyContent:'center'}}>
                    <View style={{width:'10%', padding:5}}>
                        <Icon 
                        name='user'
                        color={styles.blueText.color}
                        size={20}
                        type='font-awesome' 
                            />
                    </View>
                    <View style={{alignSelf:'flex-end', width:'80%'}}>
                        <TextInput
                            placeholder="Digite seu e-mail..."
                            onSubmitEditing={()=>{this.refs.passs.focus()}}
                            onChangeText={email => {this.setState({ email })}}
                            type="outlined"
                            style={[styles.whiteBackground,{minWidth:'70%',fontSize:20}]}
                            theme={{ colors: { primary: styles.blueText.color }}}
                        />
                    </View>
                </View>

                {/* Password entry */}
                <View style={{flexDirection:'row', alignItems:'center',justifyContent:'center'}}>
                    <View style={{width:'10%',padding:5}}>
                        <Icon 
                        name='key'
                        color={styles.blueText.color}
                        size={20}
                        type='font-awesome' 
                            />
                    </View>
                    <View style={{alignSelf:'flex-end', width:'80%'}}>
                        <TextInput
                            placeholder="Digite sua senha..."
                            ref="passs"
                            onChangeText={password => {this.setState({ password })}}
                            onSubmitEditing={()=>{this.login()}}
                            type="outlined"
                            style={[styles.whiteBackground,{minWidth:'70%',fontSize:20}]}
                            theme={{ colors: { primary: styles.blueText.color }}}
                            secureTextEntry={true}
                        />
                    </View>
                </View>

                {/* Forgot and sign-up */}
                <View style={[styles.whiteBackground,{marginTop:5, flexDirection:'row', alignItems:'center', justifyContent:'center'}]}>
                    <TouchableOpacity style={[{padding:10, marginRight:10}]}>
                        <Text style={[styles.titleBody,styles.blackText, ofstyles.forgot]}>Esqueceu a senha?</Text>
                    </TouchableOpacity>
                    <Text>
                        |
                    </Text>
                    <TouchableOpacity onPress={ () => this.props.navigation.navigate('SignUp')} style={[{padding:10,marginLeft:10}]}>
                        <Text style={[styles.titleBody,styles.blackText, ofstyles.forgot]}>Cadastre-se</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={[{marginTop:30, alignItems:'center'}]}>
                <TouchableOpacity
                    disabled={this.state.loading}
                    onPress={() => this.login()}
                    style={[!this.state.loading ? styles.greenBackground : styles.blueAltBackground, {flexDirection:'row',borderRadius:2,alignItems:'center', justifyContent:'center', width:'68%', padding:10, paddingLeft:20, paddingRight:20}]}>
                    { this.state.loading &&
                        <ActivityIndicator
                            size="small"
                            color={styles.whiteAltText.color} 
                            style={{paddingRight:20}}
                        />
                    }
                    <Text style={[styles.whiteText, styles.titleBody,{fontSize:18}]}>
                        Login
                    </Text>
                </TouchableOpacity>
            </View>
        </View>

        <View style={ofstyles.footer}>
            <Text style={{color:styles.almostBlackText.color}}>Developed by pcardoso [at] inf.ufsm.br</Text>
        </View>
        
      </View>
      //</ScrollView>  
    )
  }
}

export default LoginScreen;

const ofstyles = StyleSheet.create({
    footer:{
        paddingTop:5,
        paddingBottom:10,
        backgroundColor:styles.blackBackground.backgroundColor,
        width: '100%',
        justifyContent:'center',
        flexDirection:'row'
    },
    container:{
        backgroundColor:styles.blueBackground.backgroundColor
    },
    loginbox:{
        minWidth:150,
        padding:0,
        paddingTop:5,
        paddingBottom:10,
        borderRadius:5,
    },
    forgot:{
        fontSize:12,
    }
});