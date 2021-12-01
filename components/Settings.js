import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Header } from "./Header";

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "black",
  },
});

export const Settings = () => {
  return (
    <View style={styles.Container}>
      <Header />
      <Text>HEllo</Text>
    </View>
  );
};
