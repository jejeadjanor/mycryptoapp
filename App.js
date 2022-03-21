import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PresentationalComponent from './screens/PresentationalComponent';

export default class App extends React.Component {
  state = {
    myState: 'This is my state'
  }

  render(){
    return (
      <View style={styles.container}>
        <PresentationalComponent myState = {this.state.myState}/>
        <StatusBar style="auto" />
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
