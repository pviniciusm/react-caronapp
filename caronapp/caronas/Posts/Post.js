import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { Icon, Button } from 'react-native-elements';
import ConfirmadosIcone from './Confirmados';

import ofstyles from '../../styles/ofstyles'
import styles from '../../styles/styles';

export class CaronaPost extends Component {

    title = (thetitle) => {
        return thetitle 
        ? thetitle
        : " <Unknown>"
    }

    confirmado = (confirmados) => {
        return confirmados 
        ? "Confirmados"
        : "Sem confirmação"
    }

    

  render() {
    return (
        <View style={ofstyles.myPost}>

            <View style={ofstyles.postHeader}>
                <View style={[{flexDirection:'row', alignItems:'center'}]}>
                    <View style={{marginRight:20}}>
                        <TouchableOpacity>
                            <Image source={require('../../img/users/user1.jpg')} style={{
                                borderWidth:1,
                                borderColor:'rgba(0,0,0,0.2)',
                                alignItems:'center',
                                justifyContent:'center',
                                width:55,
                                height:55,
                                backgroundColor:'#fff',
                                borderRadius:100,
                                }}/>
                        </TouchableOpacity>
                    </View>
                    
                    <View>
                        <Text style={[styles.whiteAltText, {fontSize:20, fontWeight:'bold'}]}>Fulano da Silva</Text>
                        <View style={{flexDirection:'row'}}>
                            <Icon
                                name='arrow-right'
                                type='font-awesome'
                                color='#FFF' 
                                size={15}
                            />
                            <Text style={[styles.whiteText, {fontSize:16}] }> De {this.title(this.props.cid_origem)}</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <Icon
                                name='flag'
                                type='font-awesome'
                                color='#FFF' 
                                size={15}
                            />
                            <Text style={[styles.whiteText, {fontSize:16}]}> Para {this.title(this.props.cid_dest)}</Text>
                        </View>
                    </View>
                </View>
                
                <View style={{alignItems:'center'}} >
                    <View style={{flexDirection:'row', alignItems:'flex-end'}}>
                        <Text style={[styles.whiteText, {fontSize:20, fontWeight:'bold'}]}>1</Text>
                        <Text style={[styles.whiteText, {fontSize:13, marginRight:10}]}>/3</Text>
                        <Icon name="taxi" type="font-awesome" color="#FFF" />
                    </View>
                    
                    <Text style={styles.whiteText}>vagas</Text>
                </View> 
            </View>

            <View style={{backgroundColor:styles.whiteAltBackground.backgroundColor}}>
                <View style={{flexDirection:"row", justifyContent:'space-between', padding:10, paddingTop:20, paddingHorizontal:20}}>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Icon name="calendar" type="font-awesome" color={styles.blueText.color} />
                        <Text style={{fontWeight:'bold',marginLeft:6}}>Data 23/10/2018</Text>
                    </View>
                    
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Icon name="money" type="font-awesome" color="#171" />
                        <Text style={{fontWeight:'bold',marginLeft:6, color:"#171"}}>R$ 30,00</Text>
                    </View>
                </View>

                <View style={[ofstyles.postInfo,{flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingHorizontal:20, paddingBottom:10}]}>
                    <View >
                        <Text style={{color: '#222', fontWeight:'bold'}}>
                            Horario previsto: 13:45
                        </Text>  
                    </View>
                    <View>
                        <TouchableOpacity style={{padding:10, borderRadius:5, paddingHorizontal:20, backgroundColor:styles.blueBackground.backgroundColor}}>
                            <Text style={styles.whiteText}>Pedir vaga!!</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
            



            <TouchableOpacity style={ofstyles.postConfirmados}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Text style={[styles.blackText, {fontWeight:'bold', marginRight:10}]}>
                        {this.confirmado(this.props.confirmado)}
                    </Text>
                    

                    <ConfirmadosIcone imagePath={require("../../img/users/user2.png")} />
                    <ConfirmadosIcone imagePath={require("../../img/users/user1.jpg")} />
                    <ConfirmadosIcone imagePath={require("../../img/users/user4.png")} />
                    
                    
                    
                    
                    

                    <TouchableOpacity>
                        <Image source={require('../../img/users/user4.png')} style={{
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

            </TouchableOpacity> 
            
            
        
            
        </View>
    )
  }
}



  

export default CaronaPost


