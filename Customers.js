import React from 'react';
import { StyleSheet, Text, View, Component, NavigatorIOS } from 'react-native';
import CustomersList from './CustomersList.js';

export default class Customers extends React.Component {
  render() {
    return (
	    <NavigatorIOS style={styles.container}
      initialRoute={{
        title: "Customers",
        component: CustomersList
      }}/>

    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
