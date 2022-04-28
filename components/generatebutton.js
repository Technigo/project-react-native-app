import React, { useState, useDispatch } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Constants from "expo-constants";

export const GenerateButton = ({ handlePress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          handlePress();
        }}
      >
        <Text style={styles.text}>New image!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: "#ced7e0",
  },
  button: {
    padding: 12,
    margin: 10,
    borderColor: "#001736",
    borderRadius: 10,
    fontSize: 40,
  },
});
