import { createStackNavigator } from "react-navigation-stack"

import Home from "../screens/Home"
import Profile from "../screens/Profile"
import Logout from "../screens/Logout"

const screens = {
    Logout: {
        screen: Logout,
        navigationOptions: {
            Title: "Home", 
            Title: "Profile"
        }
    },
}

const LogoutStack = createStackNavigator(screens)
export default LogoutStack