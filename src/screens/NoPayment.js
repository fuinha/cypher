import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { enText } from "../lang/en";
import { Icon } from "react-native-elements";

export default class NoPayment extends React.Component {
 render() {
    const { navigation } = this.props;
    const option = navigation.getParam("option");
    return (
      <View style={styles.container}>
        <Icon name="warning" size={80} color="#fff"/>
        <Text style={styles.text}>{enText.choice} {option} {enText.paymentOptions}</Text>
        <Text style={styles.text}>{enText.noPayment}</Text>
        <TouchableOpacity
          style={styles.close}
          onPress={() => {
            this.props.navigation.navigate("Store");
          }}
        >
          <Icon name="close" color="tomato" />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#192338",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    color: "#517fa4",
    paddingHorizontal: 40,
    textAlign:"center"
  },
  close: {
    fontSize: 30,
    position: "absolute",
    top: 40,
    right: 15,
  },
});
