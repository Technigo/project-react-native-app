import React from "react"
import { createStackNavigator } from "react-navigation-stack"

import Logout from "../screens/Logout"
import Header from "../shared/Header"

const screens = {
    Logout: {
        screen: Logout,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} />,
            }
        }
    },
}

const LogoutStack = createStackNavigator(screens)
export default LogoutStack