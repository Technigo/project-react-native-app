import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { FavList } from '../components/FavList'

export const FavPlaceScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <FavList />
      </ScrollView>
    </View>

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