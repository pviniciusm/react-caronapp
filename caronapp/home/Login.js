import React, { Component } from 'react'
import { StatusBar, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import styles from '../styles/styles'
import { Button, Icon } from 'react-native-elements';
import { TextInput } from 'react-native-paper';
import { Orientation } from 'react-native-orientation';


export class LoginScreen extends Component {

  componentWillMount(){
    //Orientation.lockToPortrait();
  }  

  render() {
    return (
      //<ScrollView>
      
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
                            style={{fontSize:20}}
                            onSubmitEditing={()=>{this.refs.passs.focus()}}
                            type="outlined"
                            style={[styles.whiteBackground,{minWidth:'70%'}]}
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
                            style={{fontSize:20}}
                            //onSubmitEditing={()=>{this.refs.passs.focus()}}
                            type="outlined"
                            style={[styles.whiteBackground,{minWidth:'70%'}]}
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
                    <TouchableOpacity style={[{padding:10,marginLeft:10}]}>
                        <Text style={[styles.titleBody,styles.blackText, ofstyles.forgot]}>Cadastre-se</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={[{marginTop:30, alignItems:'center'}]}>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Welcome')}
                     style={[styles.greenBackground, {borderRadius:2,alignItems:'center', width:'98%', padding:10, paddingLeft:20, paddingRight:20}]}>
                    <Text style={[styles.whiteText, styles.titleBody,{fontSize:18}]}>Login</Text>
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