import { createStackNavigator } from "react-navigation-stack"
import { createAppContainer } from "react-navigation"

import Home from "../screens/Home"
import Logout from "../screens/Logout"
import Profile from "../screens/Profile"

const screens = {
    Home: {
        screen: Home
    },
    Logout: {
        screen: Logout
    },
    Profile: {
        screen: Profile
    }
}

const Navigator = createStackNavigator(screens)
export default createAppContainer(Navigator)