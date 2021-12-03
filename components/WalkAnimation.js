import React from "react";
import LottieView from "lottie-react-native";
import { StyleSheet } from "react-native";

export const WalkLoader = () => {
  return (
    <>
      <LottieView
        source={require("../assets/avocado.json")}
        style={styles.animation}
        autoPlay
      />
    </>
  );
};
const styles = StyleSheet.create({
  animation: {
    width: 200,
    height: 200,
  },
});
