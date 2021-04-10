import { createStackNavigator } from "react-navigation-stack"
import { createAppContainer } from "react-navigation"

import Profile from "../screens/Profile"
import Overview from "../screens/Overview"

const screens = {
    Profile: {
        screen: Profile
    },
    Overview: {
        screen: Overview
    },
}

const StackNavigator = createStackNavigator(screens)
export default StackNavigator