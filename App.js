import React from "react";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "./pages/HomeScreen";
import MoreInfo from "./pages/MoreInfo";
import Order from "./pages/Order";
import OrderThanks from "./pages/OrderThanks";
import Review from "./pages/Review";
import ReviewThanks from "./pages/ReviewThanks";

export const App = () => {
  return <AppContainer />;
};

const AppNavigator = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      header: null
    }
  },
  MoreInfo: {
    screen: MoreInfo,
    navigationOptions: {
      title: "Details",
      headerTintColor: "#00bfff",
      headerStyle: {
        backgroundColor: "#333333"
      }
    }
  },
  Order: {
    screen: Order,
    navigationOptions: {
      title: "Order",
      headerTintColor: "#00bfff",
      headerStyle: {
        backgroundColor: "#333333"
      }
    }
  },
  OrderThanks: {
    screen: OrderThanks,
    navigationOptions: {
      title: "Thank you for your order",
      headerTintColor: "#00bfff",
      headerStyle: {
        backgroundColor: "#333333"
      }
    }
  },
  Review: {
    screen: Review,
    navigationOptions: {
      title: "Leave review",
      headerTintColor: "#00bfff",
      headerStyle: {
        backgroundColor: "#333333"
      }
    }
  },
  ReviewThanks: {
    screen: ReviewThanks,
    navigationOptions: {
      title: "Thank you for review",
      headerTintColor: "#00bfff",
      headerStyle: {
        backgroundColor: "#333333"
      }
    }
  }
});

const AppContainer = createAppContainer(AppNavigator);

export default App;
