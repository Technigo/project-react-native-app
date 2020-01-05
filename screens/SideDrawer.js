import React, { Component } from 'react'
import { View, Text } from 'react-native'

export const SideDrawer = () => {
  return (

    <View>
      <Text> SideDrawer text...</Text>
    </View>

  )
}

SideDrawer.navigationOptions = {
  headerTitle: "SideDrawer title",
  headerStyle: {
    backgroundColor: "#f4b0c7"
  }
}
