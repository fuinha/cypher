import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { enText } from "../lang/en";

export default class Settings extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{enText.settings}</Text>
        <TouchableOpacity
          style={styles.inline}
          onPress={() => this.props.navigation.navigate("ChangeLanguage")}
        >
          <Text style={styles.text}>{enText.changeLanguage}</Text>
          <Icon
            color="#f7f7f7"
            size={24}
            name="language"
            containerStyle={{ paddingRight: 15 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.inline}
          onPress={() => this.props.navigation.navigate("Signin")}
        >
          <Text style={styles.text}>{enText.updateProfile}</Text>
          <Icon
            color="#f7f7f7"
            size={24}
            name="person"
            containerStyle={{ paddingRight: 15 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.inline}
          onPress={() => this.props.navigation.navigate("About")}
        >
          <Text style={styles.text}>{enText.about}</Text>
          <Icon
            color="#f7f7f7"
            size={24}
            name="domain"
            containerStyle={{ paddingRight: 15 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.inline}
          onPress={() => this.props.navigation.navigate("Contact")}
        >
          <Text style={styles.text}>{enText.contact}</Text>
          <Icon
            color="#f7f7f7"
            size={24}
            name="call"
            containerStyle={{ paddingRight: 15 }}
          />
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
  },
  text: {
    fontSize: 16,
    color: "#517fa4",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    color: "#517fa4",
    textAlign: "center",
    marginBottom: 10,
  },
  inline: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5,
    backgroundColor: "#212e4a",
    paddingVertical: 10,
  },
});
