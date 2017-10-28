import React from 'react';
import { StyleSheet, Text, View, Component } from 'react-native';

export default class Customers extends React.Component {
  render() {
    return (
  	  <View style={styles.container}>
        <Text style={styles.description}>
        	Customers Tab
        </Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
    description: {
        fontSize: 20,
        backgroundColor: 'white'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});