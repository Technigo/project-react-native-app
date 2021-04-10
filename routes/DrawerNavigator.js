import { createDrawerNavigator } from "react-navigation-drawer"
import { createAppContainer } from "react-navigation"

import HomeStack from "./HomeStack"
import LogoutStack from "./LogoutStack"
import ProfileStack from "./ProfileStack"

const DrawerNavigator = createDrawerNavigator({
    Home: {
        screen: HomeStack,
    },
    Profile: {
        screen: ProfileStack,
    },
    Logout: {
        screen: LogoutStack,
    }
})

export default createAppContainer(DrawerNavigator)