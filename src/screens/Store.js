import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export default class Store extends React.Component {
  static navigationOptions = {
    title: 'Store'
  };
  render() {
    return (
      <View style = {styles.container}>
        <Text>Store Screen</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container:{
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})
