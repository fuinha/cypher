import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { enText } from "../lang/en";
import { Button, Icon } from "react-native-elements";
import RadioForm from "react-native-simple-radio-button";

const payment = [
  { label: "Credit Card", value: 0 },
  { label: "Debit Card", value: 1 },
  { label: "Paytm", value: 2 },
  { label: "Cash on Delivery", value: 3 },
];

export default class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      option: [
        { label: "Credit Card", value: 0 },
        { label: "Debit Card", value: 1 },
        { label: "Paytm", value: 2 },
        { label: "Cash on Delivery", value: 3 },
      ],
      value: 0,
      valueIndex: 0,
    };
  }

  selectedLanguage = () => {
    this.props.navigation.navigate("NoPayment", {
      option: this.state.option[this.state.valueIndex].label
    });
  };

  render() {
    console.log(this.state.label);
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{enText.payment}</Text>
        <RadioForm
          ref="radioForm"
          radio_props={this.state.option}
          initial={0}
          formHorizontal={false}
          labelHorizontal={true}
          selectedButtonColor={"#0c9"}
          selectedLabelColor={"#0c9"}
          buttonColor={"#fff"}
          labelColor={"#fff"}
          onPress={(value, index) => {
            this.setState({
              value: value,
              valueIndex: index,
            });
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
            this.props.navigation.navigate("Expenses");
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
