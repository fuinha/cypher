import React from 'react';
import { Button, View, Text,StyleSheet } from 'react-native';

export default class Cart extends React.Component {
  static navigationOptions = {
    title: 'Cart'
   };
 render() {
 return (
  <View style = {styles.container}>
    <Text>Cart Screen</Text>
  </View>
);
}
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})
