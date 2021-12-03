import React from "react"
import { Text, View, ActivityIndicator, StyleSheet } from "react-native"

const AppLoading = () => {
  return (
    <View style={styles.overlay}>
      <ActivityIndicator size="large" color="#FD3A69" />
    </View>
  )
}

export default AppLoading

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
})
