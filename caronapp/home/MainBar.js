import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';


import styles from '../styles/styles';

export class MainBar extends Component {
  
    openNow = () => {
        this.props.navs.toggleDrawer();
    }
  
    render() {
    return (
        <View style={[ofstyles.header]}>
            <TouchableOpacity onPress={() => this.openNow()} style={ofstyles.sideOfHeader}>
                <Icon 
                    name='menu'
                    color={styles.whiteAltText.color}
                    size={30}
                    type='material-icons' 
                />
            </TouchableOpacity>

            <Text style={[ofstyles.welcome,styles.titleFontFamily]}>
                CaronApp
            </Text>

            <View style={ofstyles.sideOfHeader}>
                
            </View>
        </View>
    )
  }
}

export default MainBar;

const ofstyles = StyleSheet.create({
    welcome: {
        fontSize: 26,
        textAlign: 'center',
        margin: 10,
        color: '#FFF',
    },
    sideOfHeader:{
        marginLeft: 0,
        marginRight: 0,
        padding:5,
        paddingTop:5,
        paddingBottom:5,
        width:'12%',
        //backgroundColor:styles.blueAltBackground.backgroundColor
    },
    header: {
        backgroundColor: styles.blueBackground.backgroundColor,
        padding:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 10,
    },
});