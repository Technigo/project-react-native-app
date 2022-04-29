import React from "react";
import { Facts } from "./components/facts";
import img from "./assets/space.jpeg";
import { ImageBackground, StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});

const App = () => {
  return (
    <ImageBackground source={img} style={styles.image} resizeMode="cover">
      <View style={styles.container}>
        <Facts />
      </View>
    </ImageBackground>
  );
};

export default App;
