import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native'

export const MenuScreen = navData => {

  return (

    <View>

      <TouchableOpacity style={styles.button} onPress={() => navData.navigation.navigate("Fav")}>
        <Text style={styles.buttonTitle}> My fav places </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Simple Button pressed')}>
        <Text style={styles.buttonTitle}> Add new place </Text>
      </TouchableOpacity>
    </View>

  )
}
// onPress={() => {
//   navData.navigation.navigate("Menu")
// }}
MenuScreen.navigationOptions = {
  headerTitle: "Navigation",
  headerStyle: {
    backgroundColor: "#413c69"
  },
  headerTintColor: "#f4b0c7",
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#f4b0c7",
    borderRadius: 4,
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
  },
  buttonTitle: {
    fontSize: 20,
    textAlign: 'center',
    padding: 10,
  }

})