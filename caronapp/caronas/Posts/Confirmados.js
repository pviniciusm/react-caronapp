import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'

export class ConfirmadosIcone extends Component {
  
    render() {
    return (
        <View>        
            <TouchableOpacity>
                <Image source={{uri: '/img/users/user1.jpg'}} style={{
                    borderWidth:1,
                    borderColor:'rgba(0,0,0,0.2)',
                    alignItems:'center',
                    justifyContent:'center',
                    width:30,
                    height:30,
                    backgroundColor:'#fff',
                    borderRadius:100,
                    }}/>
                    
            </TouchableOpacity>
        </View>
    )
  }
}

export default ConfirmadosIcone