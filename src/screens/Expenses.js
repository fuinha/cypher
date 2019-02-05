import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Button } from "react-native-elements";
import { enText } from "../lang/en";

export default class Expenses extends React.Component {
  static navigationOptions = {
    title: "Expenses",
  };

  render() {
    const multiplier = 1;
    const { navigation } = this.props;
    const data = navigation.getParam("data");
    console.log(data, "works ");
    const total = data.reduce(function(previousValue, currentValue) {
      return {
        id: previousValue.id * multiplier + currentValue.id * multiplier,
      };
    });
    const shipping = multiplier;
    const tax = total.id / 1000;
    const grandTotal = total.id + shipping + tax;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{enText.totalExpenses}</Text>
        <ScrollView style={styles.list}>
          {data.map(item => (
            <View style={styles.content}>
              <Text style={styles.text}>
                {item.title.charAt(0).toUpperCase() + item.title.slice(1)}
              </Text>
              <Text style={styles.price}>{item.id * multiplier} &#8377;</Text>
            </View>
          ))}
          <View style={styles.content}>
            <Text style={styles.text}>{enText.shipping}:</Text>
            <Text style={styles.price}>{shipping} &#8377;</Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.text}>{enText.tax}:</Text>
            <Text style={styles.price}>{tax.toFixed(3)} &#8377;</Text>
          </View>
        </ScrollView>
        <View style={styles.total}>
          <Text style={styles.price}>{enText.total}:</Text>
          <Text style={styles.price}>{grandTotal.toFixed(2)} &#8377;</Text>
        </View>
        <Button
          backgroundColor="#517fa4"
          icon={{ name: "credit-card" }}
          title={enText.payment}
          type="ionicon"
          onPress={() => this.props.navigation.navigate("Payment")}
          containerViewStyle={{ marginTop: 10 }}
        />
        <Button
          backgroundColor="#517fa4"
          icon={{ name: "assignment" }}
          title={enText.addAddress}
          type="ionicon"
          onPress={() => this.props.navigation.navigate("Address")}
          containerViewStyle={{ marginTop: 10 }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#192338",
    flex: 1,
    paddingVertical: 50,
    position: "relative",
  },
  title: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
    marginBottom: 10,
  },
  total: {
    width: "100%",
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },
  inline: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 3,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  totaltext: {
    color: "#fff",
    fontSize: 16,
    paddingVertical: 1,
  },
  text: {
    color: "#fff",
    textAlign: "left",
    width: 150,
    fontSize: 12,
    paddingVertical: 1,
  },
  price: {
    color: "#fff",
    textAlign: "right",
    fontSize: 18,
    paddingVertical: 2,
  },
  list: {
    margin: 20,
    marginTop: 30,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#f7f7f7",
    paddingVertical: 5,
  },
});
