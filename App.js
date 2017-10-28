import React from 'react';
import { StyleSheet, Text, View, TabBarIOS } from 'react-native';
import Jobs from './Jobs';
import Customers from './Customers';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedTab: 'jobs' };
  }

  render() {
    return (
      <TabBarIOS selectedTab={this.state.selectedTab}>
               <TabBarIOS.Item
                   selected={this.state.selectedTab === 'jobs'}
                   systemIcon="featured"
                   onPress={() => {
                       this.setState({
                           selectedTab: 'jobs'
                       });
                   }}>
                   <Jobs/>
               </TabBarIOS.Item>
               <TabBarIOS.Item
                  selected={this.state.selectedTab === 'customers'}
                  systemIcon="search"
                   onPress={() => {
                       this.setState({
                           selectedTab: 'customers'
                       });
                   }}>
                   <Customers/>
               </TabBarIOS.Item>
           </TabBarIOS>
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
