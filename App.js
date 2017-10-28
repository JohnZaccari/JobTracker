import React from 'react';
import { StyleSheet, Text, View, TabBarIOS } from 'react-native';
import Featured from './Featured';
import Search from './Search';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedTab: 'featured' };
  }

  render() {
    return (
      <TabBarIOS selectedTab={this.state.selectedTab}>
               <TabBarIOS.Item
                   selected={this.state.selectedTab === 'featured'}
                   title="Jobs"
                   onPress={() => {
                       this.setState({
                           selectedTab: 'featured'
                       });
                   }}>
                   <Featured/>
               </TabBarIOS.Item>
               <TabBarIOS.Item
                  selected={this.state.selectedTab === 'search'}
                  title="Customers"
                   onPress={() => {
                       this.setState({
                           selectedTab: 'search'
                       });
                   }}>
                   <Search/>
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
