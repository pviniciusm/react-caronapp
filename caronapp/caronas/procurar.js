import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { Button } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import styles from '../styles/styles';

export class Procurar extends Component {
  render() {
    return (
      <View style={[styles.container, of_styles.container]}>

        <Icon
            name='local-taxi'
            color='#1A936F' 
            size={100}
            />

        <Text style={[of_styles.whiteText, {padding:50}]}> Procuras uma carona? </Text>
        
        <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={[of_styles.ofbutton,{flexDirection:'row', alignItems:'center', justifyContent:'center'}]}>
          <Icon
            name='arrow-left'
            type='font-awesome'
            color='#FFF' 
            />
          <Text style={[of_styles.ofbuttontext,{marginLeft:10}]}>Voltar</Text>
        </TouchableOpacity>
       
       
      </View>
    )
  }
}

const of_styles = StyleSheet.create({
  container: {
    //flex:1,
    backgroundColor: "#114B5F",
    //color: "#1A936F",
  },
  whiteText:{
    color:"#E8E9F3",
    fontSize:26,
  },
  ofbutton: {
    marginTop:30,
    borderRadius:5,
    padding:10,
    backgroundColor: "#1A936F",
  },
  ofbuttontext:{
    color:"#FFF",
    fontSize:20,
  }
})

export default Procurar;