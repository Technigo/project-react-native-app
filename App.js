import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Home } from "./screens/Home";
import { Upcoming } from "./screens/Upcoming";
import { Profile } from "./screens/Profile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Octicons, Entypo, MaterialCommunityIcons } from "@expo/vector-icons";

const tabBarStyle = {
  style: {
    backgroundColor: "black",
  },
  activeTintColor: "#e91e63",
};
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home" tabBarOptions={tabBarStyle}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <Octicons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Upcoming"
          component={Upcoming}
          options={{
            tabBarLabel: "Upcoming",
            tabBarIcon: ({ color, size }) => (
              <Entypo name="new" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
