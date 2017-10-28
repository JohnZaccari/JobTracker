import React from 'react';
import { StyleSheet, Text, View, Component, NavigatorIOS } from 'react-native';
import JobList from './JobList.js';

export default class Jobs extends React.Component {
  render() {
    return (
	    <NavigatorIOS style={styles.container}
      initialRoute={{
        title: "Recent Jobs",
        component: JobList
      }}/>

    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
