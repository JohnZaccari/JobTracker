import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Featured from './Featured';
import Search from './Search';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Job Index</Text>
        <Text>Test Conflict</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
