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
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

const title = "CaronApp";




export default class Welcome extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isDay: true,
      refreshing: false,
    }
  }

  static navigationOptions = {
    header: null
}



  _onRefresh = () => {
    this.setState({refreshing: true});
    this.props.navigation.openDrawer();
    Promise.resolve(this.changeDay()).then(() => {
      this.setState({refreshing: false});
    });
  }

  changeDay = () => {
    this.setState({isDay: new Date().getHours() < 19});
  }

  imgDay = () => {
    return this.state.isDay ? require('../img/morning.jpg') : require('../img/night.jpg');
  }

  fontDay = () => {
    return this.state.isDay ? {} : {color:"#FFF"};
  }


  render() {
    return (
      <GestureRecognizer style={styles.container}        
      >
        <View style={styles.header}>
          <Text style={styles.welcome}>
            {title}
          </Text>
        </View>
        
        <ScrollView refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
            />
          }>
          <ImageBackground source={this.imgDay()} style={{flexDirection:'column'}}>
            <View style={{flexDirection:'column', alignItems:'center', paddingTop:20,}}>
              <Text style={[{fontWeight:'bold', color:"#222",fontSize:20,}, this.fontDay()]}>Bem vindo(a), José!</Text>
              <Text style={[{color:"#555",fontSize:14,}, this.fontDay()]}>O que temos para hoje?</Text>
            </View>
            
            
            <View style={styles.buttons}>
              <TouchableOpacity style={styles.buts} onPress={() => this.props.navigation.navigate('Oferecer')}>
                <Text style={{color:"#FFF", fontSize:18}}>Oferecer</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.buts2} onPress={() => this.props.navigation.navigate('Procurar')}>
                <Text style={{color:"#FFF",fontSize:18}}>Procurar</Text>
              </TouchableOpacity>
            </View>
          
          </ImageBackground>
          

          

          <View style={styles.posts}>
            <Text style={{fontWeight:'bold', color:"#FFF",fontSize:20, padding:10}}>Caronas Oferecidas</Text>

            <View style={styles.postContainer}>
              <View style={styles.myPost}>
                <Text style={styles.title}> 
                  <Text style={styles.titleBefore}>de </Text> 
                  Rosário do Sul - RS
                </Text>
                <Text style={styles.title}> 
                <Text style={styles.titleBefore}>para </Text> 
                Santa Maria - RS
                </Text>
                <View style={styles.postInfo}>
                  <Text style={{fontSize:20, fontWeight:'bold'}}>
                    2
                    <Text style={{fontSize:12, fontWeight:'normal'}}> / 3 </Text>
                    caronas confirmadas!
                  </Text>  
                </View>
                <View style={styles.postInfo}>
                  <Text style={{fontSize:16, color: '#222', fontWeight:'bold'}}>
                    Data: 20/10/2018
                  </Text>  
                </View>
                <View style={styles.postInfo}>
                  <Text style={{fontSize:16, color: '#222', fontWeight:'bold'}}>
                    Horario previsto: 19:30
                  </Text>  
                </View>
              </View>
              
              <View style={styles.myPost}>
                <Text style={styles.title}> 
                  <Text style={styles.titleBefore}>de </Text> 
                  Santa Maria - RS
                </Text>
                <Text style={styles.title}> 
                  <Text style={styles.titleBefore}>para </Text> 
                  Porto Alegre - RS
                  </Text>
                <View style={styles.postInfo}>
                  <Text style={{fontSize:20, fontWeight:'bold'}}>
                    0
                    <Text style={{fontSize:12, fontWeight:'normal'}}> / 3 </Text>
                    caronas confirmadas!
                  </Text>  
                </View>
                <View style={styles.postInfo}>
                  <Text style={{fontSize:16, color: '#222', fontWeight:'bold'}}>
                    Data: 21/10/2018
                  </Text>  
                </View>
                <View style={styles.postInfo}>
                  <Text style={{fontSize:16, color: '#222', fontWeight:'bold'}}>
                    Horario previsto: 08:00
                  </Text>  
                </View>
              </View>
            </View>
          </View>






          <View style={styles.posts2}>
            <Text style={{fontWeight:'bold', color:"#FFF",fontSize:20, padding:10}}>Caronas Solicitadas</Text>

            <View style={styles.postContainer}>
              <View style={styles.myPost}>
                <Text style={styles.title}> 
                  <Text style={styles.titleBefore}>de </Text> 
                  Rosário do Sul - RS
                </Text>
                <Text style={styles.title}> 
                <Text style={styles.titleBefore}>para </Text> 
                Santa Maria - RS
                </Text>
                <View style={styles.postInfo}>
                  <Text style={{fontSize:20, fontWeight:'bold'}}>
                    CONFIRMADO!
                  </Text>  
                </View>
                <View style={styles.postInfo}>
                  <Text style={{fontSize:16, color: '#222', fontWeight:'bold'}}>
                    Data: 18/10/2018
                  </Text>  
                </View>
                <View style={styles.postInfo}>
                  <Text style={{fontSize:16, color: '#222', fontWeight:'bold'}}>
                    Horario previsto: 13:45
                  </Text>  
                </View>
              </View>
              
              <View style={styles.myPost}>
                <Text style={styles.title}> 
                  <Text style={styles.titleBefore}>de </Text> 
                  Santa Maria - RS
                </Text>
                <Text style={styles.title}> 
                  <Text style={styles.titleBefore}>para </Text> 
                  Porto Alegre - RS
                  </Text>
                <View style={styles.postInfo}>
                  <Text style={{fontSize:20, fontWeight:'bold'}}>
                    Ainda sem resposta...
                  </Text>  
                </View>
                <View style={styles.postInfo}>
                  <Text style={{fontSize:16, color: '#222', fontWeight:'bold'}}>
                    Data: 21/10/2018
                  </Text>  
                </View>
                <View style={styles.postInfo}>
                  <Text style={{fontSize:16, color: '#222', fontWeight:'bold'}}>
                    Horario previsto: 08:00
                  </Text>  
                </View>
              </View>
            </View>
          </View>

          
        </ScrollView>

      </GestureRecognizer>
    );
  }
}

export const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin:20,
    justifyContent:'space-around',
    //alignItems:'baseline',
  },
  buts:{
    flexDirection:'row',
    minWidth:150,
    padding:10,
    borderRadius: 6,
    backgroundColor:"#1A936F",
    justifyContent:'center',
  },
  buts2:{
    flexDirection:'row',
    minWidth:150,
    padding:10,
    borderRadius: 6,
    backgroundColor:"#4A4E69",
    justifyContent:'center',
  },
  //4A4E69
  container: {
    flex: 1,
    backgroundColor: '#F8F9F3',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontWeight:'bold',
    color: '#FFF',
  },
  header: {
    backgroundColor:'#114B5F',
    padding:10,
    
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 10,
  },

  posts: {
    padding:20,
    backgroundColor: "#1A936F",
    paddingBottom:30,
  },

  posts2: {
    padding:20,
    backgroundColor: "#4A4E69",
  },

  postContainer: {
    flexDirection:'column',
    alignItems:'center',
    flex:1,
  },

  myPost: {
    //alignItems:'center',
    width:'100%',
    padding: 20,
    marginBottom:10,
    backgroundColor: '#fff',
    //justifyContent: 'center',
    borderRadius:5,
  },
  title: {
    fontSize:24,
    color:'#222',
    fontWeight: 'bold',
  },
  titleBefore: {
    fontSize:12,
    color:'#444',
    fontWeight: 'normal',
  },
  postInfo:{
    marginTop:10,
  },
  subTitle: {
    fontSize: 18,
    color: '#666',
  },
});

