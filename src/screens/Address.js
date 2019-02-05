import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Modal,
  TouchableOpacity,
  Alert,
} from "react-native";
import Toast, { DURATION } from "react-native-easy-toast";
import { Button, Icon } from "react-native-elements";
import { enText } from "../lang/en";
import { Dropdown } from "react-native-material-dropdown";
import { cityList, countryList } from "../JSON/list";

export default class Address extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "asd",
      email: "asd",
      location: "asd",
      contact: "asd",
      city: "asd",
      country: "asd",
      address: [],
      modalVisible: false,
    };
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  openModal = () => {
    this.setModalVisible(true);
  };

  submitAddress = e => {
    e.preventDefault();
    const obj = {
      name: this.state.name,
      email: this.state.email,
      location: this.state.location,
      city: this.state.city,
      country: this.state.country,
      contact: this.state.contact,
    };
    this.setState({
      address: [...this.state.address, obj],
    });
    this.setModalVisible(!this.state.modalVisible);
    this.refs.toast.show("Your product will be shipped soon!");
  };

  updateAddress = () => {
    console.log("Update is working");
  };

  render() {
    const { name, email, contact, city, location, country } = this.state;
    const isEnabled =
      email.length > 0 &&
      name.length > 0 &&
      location.length > 0 &&
      city.length > 0 &&
      country.length > 0 &&
      contact.length > 0;

    return (
      <View style={styles.container}>
        <Toast
          ref="toast"
          style={{ backgroundColor: "#0c9" }}
          position="top"
          positionValue={100}
          fadeInDuration={750}
          fadeOutDuration={1000}
          textStyle={{ color: "#000" }}
        />
        <Text style={styles.title}>{enText.contact}</Text>
        <View>
          <Text style={styles.label}>Name:</Text>
          <TextInput
            style={styles.text}
            onChangeText={data => this.setState({ name: data })}
          />
        </View>
        <View>
          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={styles.text}
            onChangeText={data => this.setState({ email: data })}
          />
        </View>
        <View>
          <Text style={styles.label}>Contact Number:</Text>
          <TextInput
            keyboardType="phone-pad"
            style={styles.text}
            onChangeText={data => this.setState({ contact: data })}
          />
        </View>
        <View>
          <Text style={styles.label}>Location:</Text>
          <TextInput
            style={styles.text}
            onChangeText={data => this.setState({ location: data })}
          />
        </View>
        <View style={styles.inline}>
          <Dropdown
            label="City"
            data={cityList}
            textColor="#f7f7f7"
            baseColor="#f7f7f7"
            onChangeText={data => this.setState({ city: data })}
            containerStyle={{ width: "45%" }}
          />
          <Dropdown
            label="Country"
            data={countryList}
            textColor="#f7f7f7"
            baseColor="#f7f7f7"
            onChangeText={data => this.setState({ country: data })}
            containerStyle={{ width: "45%" }}
          />
        </View>
        <Button
          backgroundColor="#517fa4"
          title={enText.review}
          containerViewStyle={{ marginTop: 20 }}
          onPress={e => this.openModal()}
          disabled={!isEnabled}
          disabledStyle={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        />
        <Button
          backgroundColor="#517fa4"
          title={enText.update}
          containerViewStyle={{ marginTop: 20 }}
          onPress={() => this.updateAddress()}
        />
        <Modal
          animationType="slide"
          transparent
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={styles.modal}>
            <Text style={styles.title}>Your address is: </Text>
            <Text style={styles.label}>
              Name:
              <Text style={styles.text}>{this.state.name}</Text>
            </Text>
            <Text style={styles.label}>
              Email:
              <Text style={styles.text}>{this.state.email}</Text>
            </Text>
            <Text style={styles.label}>
              Contact Details:
              <Text style={styles.text}>{this.state.contact}</Text>
            </Text>
            <Text style={styles.label}>
              Location :<Text style={styles.text}>{this.state.location}</Text>
            </Text>
            <Text style={styles.label}>
              City:
              <Text style={styles.text}>{this.state.city}</Text>
            </Text>
            <Text style={styles.label}>
              Country:
              <Text style={styles.text}>{this.state.country}</Text>
            </Text>
            <TouchableOpacity
              style={styles.close}
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
              }}
            >
              <Icon name="close" color="#fff" />
            </TouchableOpacity>
            <Button
              backgroundColor="#517fa4"
              title={enText.submitText}
              containerViewStyle={{ marginTop: 20 }}
              onPress={e => this.submitAddress(e)}
            />
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#192338",
    flex: 1,
    paddingLeft: 15,
    paddingTop: 50,
  },
  title: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
    marginBottom: 10,
  },
  inline: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 5,
  },
  label: {
    color: "#f7f7f7",
    paddingVertical: 5,
    fontSize: 16,
  },
  text: {
    color: "#fff",
    paddingVertical: 2,
    paddingHorizontal: 5,
    fontSize: 18,
  },
  modal: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#192338",
    position: "relative",
    paddingHorizontal: 30,
  },
  close: {
    fontSize: 30,
    position: "absolute",
    top: 40,
    right: 15,
  },
});
