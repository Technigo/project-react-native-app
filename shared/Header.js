import React from "react"
import { StyleSheet, View, Text, TouchableOpacity } from "react-native"
import { Ionicons } from "@expo/vector-icons"
// import { useNavigation } from '@react-navigation/native'

export const Header = ({ navigation, title }) => {
  // const openMenu = useNavigation()

  return (
    <View style={styles.header}>
      <TouchableOpacity 
        onPress={() => navigation.toggleDrawer()}
        style={styles.icons}
      >
        <Ionicons 
          name="md-menu" 
          size={28} 
          color="white" 
        />
      </TouchableOpacity>
      <View style={styles.headerTitle}>
        <Text style={styles.headerText}>{title}Hello gello</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    marginTop: 26,
    width: "100%",
    height: 60,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#87ceeb"
  },
  headerTitle: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center"
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#333",
    letterSpacing: 1,
    color: "#fff"
  },
  icons: {
    position: "absolute",
    left: 16,
    top: 15
  }
})