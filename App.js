import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TouchableHighlight } from "react-native";
import styled from "styled-components/native";

import Home from "./components/Home";
import ButtonApi from "./components/ButtonApi";
import RollD6 from "./components/RollD6";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
    return (
        <NavigationContainer>
            {/* <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Roll D6" component={RollD6} />
            </Stack.Navigator> */}

            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Roll D6" component={RollD6} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default App;
