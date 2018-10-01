import React from 'react';
import { Button, View, Text,StyleSheet } from 'react-native';

export default class Expenses extends React.Component {
  static navigationOptions = {
    title: 'Expenses'
   };
 render() {
 return (
 <View style = {styles.container}>
    <Text>Expenses Screen</Text>
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
