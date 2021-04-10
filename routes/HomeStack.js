import { createStackNavigator } from "react-navigation-stack"

import Home from "../screens/Home"
import Logout from "../screens/Logout"
import Profile from "../screens/Profile"
import Overview from "../screens/Overview"

const screens = {
    Profile: {
        screen: Profile
    },
    Overview: {
        screen: Overview
    },
    Home: {
        screen: Home
    },
    Logout: {
        screen: Logout
    },
}

const StackNavigator = createStackNavigator(screens)
export default createAppContainer(StackNavigator)