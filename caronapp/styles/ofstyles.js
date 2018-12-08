'use strict';
import {StyleSheet} from 'react-native';

import styles from './styles'


export default StyleSheet.create({
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
      fontSize: 26,
      textAlign: 'center',
      margin: 10,
      //fontWeight:'bold',
      color: '#FFF',
    },
    header: {
      backgroundColor: styles.blueBackground.backgroundColor,//'#114B5F',
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
      //padding: 20,
      marginBottom:20,
      backgroundColor: '#fff',
      
    },
    
    postHeader: {
        padding:10,
        paddingHorizontal:20,
        backgroundColor:styles.blueBackground.backgroundColor,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',

        shadowColor: '#000',
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 5,
    },

    postConfirmados:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10,
        backgroundColor: "#d9d9d9",
        paddingHorizontal:15,
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
      padding:10,
      paddingHorizontal:30,
    },
    subTitle: {
      fontSize: 18,
      color: '#666',
    },
  });