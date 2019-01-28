import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { enText } from "../lang/en";
import { Icon } from "react-native-elements";

export default class About extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{enText.about}</Text>
        <View>
          <Text style={styles.text}>
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

          </Text>
        </View>
        <TouchableOpacity
          style={styles.close}
          onPress={() => {
            this.props.navigation.navigate('Settings');
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
    position: "relative"
  },
  title: {
    fontSize: 20,
    color: "#517fa4",
    textAlign: "center",
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    color: "#f7f7f7",
    paddingHorizontal: 20,
  },
  close: {
    fontSize: 30,
    position: "absolute",
    top: 40,
    right: 15,
  },
});
