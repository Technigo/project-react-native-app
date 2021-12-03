import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TouchableHighlight } from "react-native";
import styled from "styled-components/native";

import TabIcon from "./components/TabIcon";
import Home from "./components/Home";
import ButtonApi from "./components/ButtonApi";
import RollD6 from "./components/RollD6";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: () => {
                        let iconName;

                        if (route.name === "Home") {
                            iconName = "home";
                        } else if (route.name === "Roll D6") {
                            iconName = "die";
                        }
                        return <TabIcon name={iconName} />;
                    },
                })}
            >
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Roll D6" component={RollD6} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default App;
