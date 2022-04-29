import React from "react";
import LottieView from "lottie-react-native";
import { View, Text, StyleSheet } from "react-native";

export default function Loading() {
  return (
    <View style={styles.container}>
      <LottieView
        source={require("../lottie/cat.json")}
        style={styles.lottie}
        autoPlay
        loop
      />
      <Text style={styles.title}>Loading...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  lottie: {
    backgroundColor: "pink",
  },
  title: {
    fontSize: 32,
    color: "white",
    marginBottom: "20%",
  },
});
