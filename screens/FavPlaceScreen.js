import React from 'react'
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native'
import { FavList } from '../components/FavList'

export const FavPlaceScreen = () => {
  return (
    <ImageBackground source={require('../assets/wildberry-bg.jpg')} style={{ width: '100%', height: '100%' }}>
      <ScrollView>
        <FavList />
      </ScrollView>

    </ImageBackground>

  )
}

FavPlaceScreen.navigationOptions = {
  headerTitle: "My fav places",
  headerStyle: {
    backgroundColor: "#413c69"
  },
  headerTintColor: "#f4b0c7",
}