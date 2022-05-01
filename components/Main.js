import React, { createRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import styled from "styled-components/native";
import HomeScreen from "./HomeScreen";
import PedometerScreen from "./PedometerScreen";

const homescreen = "Home";
const pedometerScreen = "Step counter";

const Tab = createBottomTabNavigator();
const Container = styled.View`
  flex: 1;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 40px;
  color: black;
  margin: 50px;
  text-align: center;
  margin-top: 0px;
`;

const Text = styled.Text`
  font-size: 30px;
  color: black;
  text-align: center;
  margin: 10px;
`;
const Main = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homescreen}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;
            if (rn === homescreen) {
              iconName = focused ? "home" : "home";
            } else if (rn === pedometerScreen) {
              iconName = focused ? "walk" : "walk";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name={homescreen} component={HomeScreen} />
        <Tab.Screen name={pedometerScreen} component={PedometerScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Main;
