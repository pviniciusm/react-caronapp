'use strict';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

    title: {
        fontSize: 10,
        color: '#000',
        backgroundColor: '#fff'
    },

    button: {
        flexDirection:'row',
        minWidth:150,
        padding:10,
        borderRadius: 6,
        backgroundColor:"#1A936F",
        justifyContent:'center',
    }, 
    whiteAltText:{
        color:"#E8E9F3"
    },
    whiteAltBackground:{
        backgroundColor:"#E8E9F3"
    },
    whiteText:{
        color:"#FFF"
    },
    whiteBackground:{
        backgroundColor:"#FFF"
    },
    greenBackground:{
        backgroundColor: "#1A936F",
    },
    greenText:{
        color: "#1A936F",
    },
    blueBackground:{
        backgroundColor:"#174266"
    },
    blueText:{
        color:"#174266"
    },
    blueAltBackground:{
        backgroundColor:"#114B5F"
    },
    blueAltText:{
        color:"#114B5F"
    },
    blackBackground:{
        backgroundColor:"#07020D",
    },
    blackText:{
        color:"#07020D",
    },
    almostBlackBackground:{
        backgroundColor:"#222",
    },
    almostBlackText:{
        color:"#222",
    },

    // Fonts

    titleFontFamily:{
        fontFamily:'Quantify'
    },
    titleBody: {
        fontFamily:'Gravity-Book',
    }

});

/**
 * Paleta de cores:
 * 
 * Preto: #07020D
 * Azul: #114B5F
 * Azul2: #174266
 * Branco: #F1E9DB
 * Branco mais claro: #E8E9F3
 * Verde: #1A936F
 */