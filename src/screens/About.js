import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { enText } from "../lang/en";
import { Icon } from "react-native-elements";

export default class About extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{enText.about}</Text>
        <View style={styles.content}>
          <Text style={styles.text}>
            This app is basically a prototype of an online store app, where a
            user can simply sign in and choose items from the list and go ahead
            to choose the mode of payment and update there address for delivery.
            This app also contains the feature to change the language depending
            on the zone in which the app will be used. In future we might add
            the feature to make payment and various other advanced features
            required in an online store app. Feel free to provide us any
            feedback if there is any and let us help to build a better world
            together.
          </Text>
        </View>
        <TouchableOpacity
          style={styles.close}
          onPress={() => {
            this.props.navigation.navigate("Settings");
          }}
        >
          <Icon name="close" color="#fff" />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#192338",
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 10,
    position: "relative",
  },
  title: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  },
  content: {
    backgroundColor: "#FA7B5F",
    borderTopRightRadius: 35,
    borderBottomLeftRadius: 35,
    marginTop: 30,
    padding: 10,
  },
  text: {
    fontSize: 16,
    padding: 10,
    color: "#fff"
  },
  close: {
    fontSize: 30,
    position: "absolute",
    top: 40,
    right: 15,
  },
});
