import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"

import { Notifications } from "../screens/Notifications"
import { Profile } from "../screens/Profile"
import { Login } from "../screens/Login"

const Drawer = createDrawerNavigator()

const AppNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: true }}>
      <Drawer.Screen name="Logout" component={Login} options={{ headerShown: false }}/>
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Notifications" component={Notifications} />
    </Drawer.Navigator>
  )
}

export default AppNavigator