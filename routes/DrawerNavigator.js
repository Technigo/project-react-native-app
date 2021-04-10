import { createDrawerNavigator } from "react-navigation-drawer"
import { createAppContainer } from "react-navigation"

import HomeStack from "./HomeStack"
import LogoutStack from "./LogoutStack"
import StackNavigator from "./StackNavigator"


const DrawerNavigator = createDrawerNavigator({
    Home: {
        screen: HomeStack,
    },
    Profile: {
        screen: StackNavigator,
    },
    Logout: {
        screen: LogoutStack,
    }
})

export default createAppContainer(DrawerNavigator)