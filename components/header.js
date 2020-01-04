import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Notes</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 100,
    paddingTop: 50,
    backgroundColor: "#9cdcaa"
  },
  title: {
    textAlign: "center",
    color: "#fff",
    fontSize: 25,
    fontWeight: "700"
  }
});
