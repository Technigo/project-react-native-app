import { createStackNavigator } from "react-navigation-stack"

import Home from "../screens/Home"
import Profile from "../screens/Profile"


const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            Title: "Profile", 
            Title: "Logout"
        }
    },
}

const HomeStack = createStackNavigator(screens)
export default HomeStack