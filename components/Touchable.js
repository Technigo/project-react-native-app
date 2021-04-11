import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import styled from 'styled-components/native'

export const Touchable = ({ btnText, navigation }) => {
  return (
    <TouchableOpacity style={styles.customBtn}
      onPress={() => navigation.toggleDrawer()} >
      <Text style={styles.customBtnText}>{btnText}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create ({
  customBtnText: {
    fontSize: 20,
    color: "#ff8093",
    textAlign: "center"
  }

})