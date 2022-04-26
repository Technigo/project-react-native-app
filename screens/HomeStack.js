import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Home";
import Chat from "./Chat";
import AddRoom from "./AddRoom";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const HomeStack = ({ navigation }) => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{ headerTransparent: true }}
      />
      <Drawer.Screen
        name="Add Room"
        component={AddRoom}
        options={{ headerTransparent: true }}
      />
      <Drawer.Screen
        name="Chat"
        component={Chat}
        options={{ headerTransparent: true }}
      />
    </Drawer.Navigator>
  );
};

export default HomeStack;
