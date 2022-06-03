import React from "react";
import { SensorComponent } from "./components/SensorComponent";
import { LinearGradient } from "expo-linear-gradient";
import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 900,
  },
});

const App = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#3A1C71", "#D76D77", "#FFAF7B"]}
        style={styles.background}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <SensorComponent></SensorComponent>
      </LinearGradient>
    </View>
  );
};

export default App;
