import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { enText } from "../lang/en";
import { Button, Icon } from "react-native-elements";
import RadioForm from "react-native-simple-radio-button";

const lang = [
  { label: "English", value: 0 },
  { label: "Spanish", value: 1 },
  { label: "Hindi", value: 2 },
];

export default class ChangeLanguage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  selectedLanguage = () => {
    console.log(this.state.value);
    this.props.navigation.navigate("Settings");
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{enText.changeLanguage}</Text>
        <RadioForm
          radio_props={lang}
          initial={0}
          selectedButtonColor={"#0c9"}
          selectedLabelColor={"#0c9"}
          buttonColor={"#fff"}
          labelColor={"#fff"}
          onPress={value => {
            this.setState({ value: value });
          }}
        />
        <Button
          backgroundColor="#517fa4"
          title={enText.submit}
          type="ionicon"
          onPress={() => this.selectedLanguage()}
          containerViewStyle={{ marginTop: 70 }}
        />
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
    paddingHorizontal: 20,
    position: "relative",
  },
  title: {
    fontSize: 20,
    color: "#517fa4",
    textAlign: "center",
    marginBottom: 50,
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
