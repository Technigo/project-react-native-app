import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Home } from "./screens/Home";
import { Upcoming } from "./screens/Upcoming";
import { Profile } from "./screens/Profile";
import { Login } from "./screens/Login";
import { Register } from "./screens/Register";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Octicons, Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import { useGetUser } from "./hooks/asyncStorage";
import { MediaDetail } from "./screens/MediaDetail";

// Const to set style options.
const tabBarStyle = {
  style: {
    backgroundColor: "black",
  },
  activeTintColor: "#e91e63",
};

// Libraries constants
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Home Navigation component
const HomeStack = ({ recall }) => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen
        name="appNavigation"
        component={NavigationTab}
        initialParams={{ recall }}
      ></Stack.Screen>
      <Stack.Screen name="media-detail" component={MediaDetail} />
    </Stack.Navigator>
  );
};

//Authentication component navigation (login / register)
const AuthStack = ({ recall }) => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen
        name="login"
        component={Login}
        initialParams={{ recall }}
      ></Stack.Screen>
      <Stack.Screen
        name="register"
        component={Register}
        initialParams={{ recall }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

// Tab Navigation component (icons- options)
const NavigationTab = (props) => {
  return (
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
        initialParams={{ recall: props.route.params.recall }}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  const { user, getUser } = useGetUser();

  const recall = () => {
    getUser();
  };

  return (
    <NavigationContainer>
      {user ? <HomeStack recall={recall} /> : <AuthStack recall={recall} />}
    </NavigationContainer>
  );
};

export default App;
