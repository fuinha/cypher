import React, { Component } from "react";
import {
  createBottomTabNavigator,
  createStackNavigator,
} from "react-navigation";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Store from "./src/screens/Store";
import Expenses from "./src/screens/Expenses";
import Address from "./src/screens/Address";
import Profile from "./src/screens/Profile";
import Settings from "./src/screens/Settings";
import About from "./src/screens/About";
import Contact from "./src/screens/Contact";
import ChangeLanguage from "./src/screens/ChangeLanguage";
import Signin from "./src/screens/Signin";
import Payment from "./src/screens/Payment";
import NoPayment from "./src/screens/NoPayment";


const SettingsStack = createStackNavigator(
  {
    Settings: {
      screen: Settings,
    },
    Signin:{
      screen: Signin,
    },
    About: {
      screen: About,
    },
    Contact: {
      screen: Contact,
    },
    ChangeLanguage: {
      screen: ChangeLanguage
    },

  },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false,
    },
  }
);

const StoreStack = createStackNavigator({
    Store: {
      screen: Store
    },
    Expenses: {
      screen: Expenses
    },
    Payment: {
      screen: Payment
    },
    NoPayment: {
      screen: NoPayment
    },
    Address:{
      screen: Address
    },
   },
    {
      headerMode: "none",
      navigationOptions: {
        headerVisible: false,
      },
    }
  );

export default MyNewProject = createBottomTabNavigator(
  {
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <FontAwesome
            name="user"
            size={20}
            color={focused ? "white" : "#657091"}
          />
        ),
      },
    },
    Store: {
      screen: StoreStack,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <FontAwesome
            name="shopping-bag"
            size={20}
            color={focused ? "white" : "#657091"}
          />
        ),
      },
    },
    Settings: {
      screen: SettingsStack,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <FontAwesome
            name="cog"
            size={20}
            color={focused ? "white" : "#657091"}
          />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: "#fff",
      labelStyle: {
        fontSize: 12,
      },
      style: {
        backgroundColor: "#192338",
      },
    },
  }
);
