import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'




export const MenuScreen = navData => {

  return (

    <View style={styles.container}>
      <View style={styles.bottonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navData.navigation.navigate("FavPlace")} >
          <Text style={styles.buttonTitle}> My fav places </Text>
          <Ionicons
            style={styles.icon}
            name="ios-arrow-forward"
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navData.navigation.navigate("AddPlace")}>
          <Text style={styles.buttonTitle}> Add new place </Text>
          <Ionicons
            style={styles.icon}
            name="ios-arrow-forward"
          />
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
    backgroundColor: "transparent",
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  buttonTitle: {
    fontSize: 20,
    textAlign: 'left',
    padding: 10,
    color: "#fff",
  },

  icon: {
    fontSize: 35,
    color: "#c70d3a",
  }

})