import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Home from "./components/Home";

//const Separator = () => <View style={styles.separator} />;

export default class App extends React.Component {
  render() {
    return (
      
    <Home/>

    
      

    );
  } 
}
const styles = StyleSheet.create({
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});