import React from 'react';
import { Button, View, Text,StyleSheet } from 'react-native';

export default class Profile extends React.Component {
 render() {
 return (
  <View style = {styles.container}>
    <Text>Profile Screen</Text>
  </View>
);
}
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
})
