import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";
import { enText } from "../lang/en";
import { Icon } from "react-native-elements";

export default class Contact extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{enText.contact}</Text>
        <View style={styles.card}>
          <Text style={styles.name}>Sudhir Kumar Ojha</Text>
          <Text style={styles.text}>7876212256</Text>
          <Text style={styles.text}>sudhirkumarojhaa@gmail.com</Text>
          <Text style={styles.text}>
            Front End Developer, Rubico IT. Haridwar
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
  card: {
    backgroundColor: "#FA7B5F",
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    marginTop: 30,
    padding: 10,
  },
  text: {
    fontSize: 16,
    color: "#fff"
  },
  name:{
    fontSize: 26,
    paddingVertical: 10,
    color: "#fff"
  },
  close: {
    fontSize: 30,
    position: "absolute",
    top: 40,
    right: 15,
  },
});
