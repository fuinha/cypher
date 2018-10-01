import React, { Component } from "react";
import {createBottomTabNavigator } from 'react-navigation';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Store from "./src/screens/Store";
import Expenses from "./src/screens/Expenses";
import Cart from "./src/screens/Cart";
import Profile from "./src/screens/Profile";

export default MyNewProject = createBottomTabNavigator({
  Profile:{
    screen: Profile,
    navigationOptions:{
      tabBarIcon: ({ focused }) =>
      <FontAwesome
      name="user"
      size={20}
      color = {
        focused ? "white" : "#657091"
      }
      />
    }
  },
  Store: {
   screen: Store,
   navigationOptions:{
     tabBarIcon: ({ focused }) =>
     <FontAwesome
     name="shopping-bag"
     size={20}
     color = {
       focused ? "white" : "#657091"
     }
     />
   }
  },
  Expenses: {
   screen: Expenses,
   navigationOptions:{
     tabBarIcon: ({ focused }) =>
     <FontAwesome
     name="dollar"
     size={20}
     color = {
       focused ? "white" : "#657091"
     }
     />
   }
  },
  Cart: {
    screen: Cart,
    navigationOptions:{
      tabBarIcon: ({ focused }) =>
      <FontAwesome
      name="cart-plus"
      size={20}
      color = {
        focused ? "white" : "#657091"
      }
      />
    }
  }},
  {
  tabBarOptions: {
    activeTintColor: '#fff',
    labelStyle: {
      fontSize: 12
    },
    style: {
      backgroundColor: '#192338',
    },
  }
}
);

