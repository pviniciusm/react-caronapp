import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'

export class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Welcome to the Home Screen!! </Text>
        <Button title="Voltar para a pagina inicial"
            onPress={() => this.props.navigation.navigate('Welcome')}  />
      </View>
    )
  }
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#DDD',
    }
});