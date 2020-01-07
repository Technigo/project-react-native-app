import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import { Item } from "react-navigation-header-buttons"
import HeaderButton from '../components/HeaderButton'

export const MenuScreen = navData => {

  return (

    <View style={styles.container}>
      <View style={styles.bottonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navData.navigation.navigate("FavPlace")}>
          <Text style={styles.buttonTitle}> My fav places </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navData.navigation.navigate("AddPlace")}>
          <Text style={styles.buttonTitle}> Add new place </Text>
        </TouchableOpacity>
      </View>
    </View>

  )
}
// onPress={() => {
//   navData.navigation.navigate("Menu")
// }}

MenuScreen.navigationOptions = {
  headerTitle: "Menu",
  headerStyle: {
    backgroundColor: "#fff"
  },
  headerTintColor: "#c70d3a",
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: "#45969b",
    flex: 1,
  },


  bottonContainer: {
    marginTop: 35,

  },

  button: {
    backgroundColor: "#f4b0c7",
    borderRadius: 4,
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
  },

  buttonTitle: {
    fontSize: 20,
    textAlign: 'left',
    padding: 10,
  }

})