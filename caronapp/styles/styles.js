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
    }

});