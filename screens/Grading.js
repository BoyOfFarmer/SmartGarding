import React, {Component} from 'react';
import {Text, StyleSheet, View,StatusBar} from 'react-native';

export default class Grading extends Component {
  static navigationOptions = {
    header : null
  };
  render() {

    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
        <Text>User</Text>
      </View>
    );
  }
}
