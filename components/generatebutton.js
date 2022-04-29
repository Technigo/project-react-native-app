import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 0,
  },
  text: {
    fontSize: 20,
    color: "#ced7e0",
    margin: 0,
  },
  button: {
    padding: 12,
    backgroundColor: "#1d1124",
    borderRadius: 10,
    fontSize: 40,
  },
});

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
