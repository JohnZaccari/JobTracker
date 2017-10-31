import React from 'react';
import { StyleSheet, Text, View, Component, FlatList } from 'react-native';

export default class JobList extends React.Component {
  render() {
    return (
        <View style={styles.container}>
        <FlatList
          key={"flatlistexample"}
          data={this.props.topicsSortedByCat}
          renderItem={({item}) => this.renderFlatListItem(item)}
        />
        </View>
    )}
}

const styles = StyleSheet.create({
  text: {
    color: '#00ffff',
    fontSize: 19,
  }
});
