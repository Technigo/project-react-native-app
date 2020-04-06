import React from "react";
import { Share } from "react-native";

import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react'



export const ShareButton = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.TouchableOpacity}>
        <Text style={styles.Text}>Share a Giphy!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: 'center',
    padding: 24,
  },
  TouchableOpacity: {
    backgroundColor: "#bda2c4",
    borderRadius: 50,
    marginTop: 200,
    padding: 20,
  },
  Text: {
    fontSize: 14,
    color: "#000000",
    textTransform: "uppercase"
  }
});