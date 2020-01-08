import React from 'react'
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native'
import { FavList } from '../components/FavList'

export const FavPlaceScreen = () => {
  return (
    // <ImageBackground source={require('../assets/wildberry-bg.jpg')} style={{ width: '100%', height: '100%' }}>
    <View style={styles.container}>
      <ScrollView>
        <FavList />
      </ScrollView>
    </View>

    /* </ImageBackground> */

  )
}

FavPlaceScreen.navigationOptions = {
  headerTitle: "My fav places",
  headerStyle: {
    backgroundColor: "#fff"
  },
  headerTintColor: "#c70d3a",
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#45969b",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }

}
)