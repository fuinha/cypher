import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Icon } from "react-native-elements";
import {enText} from "../lang/en";

export default class Profile extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Icon name="sc-telegram" type="evilicon" color="#517fa4" size={120} />
          <Text style={styles.text}>{enText.welcomeMessage}</Text>
        </View>
        <Button
          backgroundColor="#517fa4"
          icon={{ name: "fingerprint" }}
          title={enText.explore}
          type="ionicon"
          onPress={() => this.props.navigation.navigate("Store")}
          containerViewStyle={{width:"100%"}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#192338",
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  text: {
    fontSize: 36,
    color: "#fff",
  },
});
