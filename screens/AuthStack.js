import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Signup from "../screens/Signup";
import Login from "../screens/Login";
import BlueScreen from "./BlueScreenOfDeath";

const Stack = createStackNavigator();

const AuthStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BlueScreen"
        component={BlueScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
