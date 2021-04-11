import React from "react"

import {StyleSheet} from 'react-native'
import { NavigationContainer } from "@react-navigation/native"
import AppNavigator from "./navigation/AppNavigator"

const App = () => {
  return (
    <View style={styles.main}>
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  main: {
  backgroundColor: "#F2F2F2" 
  }
})