import React from "react"
import { createStackNavigator } from "react-navigation-stack"

import Profile from "../screens/Profile"
import Overview from "../screens/Overview"
import Header from "../shared/Header"

const screens = {
    Profile: {
        screen: Profile,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} />,
            }
        }
    },

    Overview: {
        screen: Overview
    },
}

const ProfileStack = createStackNavigator(screens)
export default ProfileStack