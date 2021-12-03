import React from "react";
import ShakeApi from "./components/ShakeApi";
import { StyleSheet, View, ImageBackground } from "react-native";

const image = {
  uri: "https://i.pinimg.com/736x/19/7d/ba/197dba047b54c90a27f3aa796efc0b42.jpg",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    resizeMode: "cover",
  },
});

const App = () => {
  return (
    <ImageBackground source={image} style={styles.image}>
      <View style={styles.container}>
        <ShakeApi />
      </View>
    </ImageBackground>
  );
};

export default App;
