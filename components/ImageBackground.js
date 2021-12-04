import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

const image = { uri: "https://www.placecage.com/gif/200/300" };

const App = () => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>Inside</Text>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
});

export default ImageBackground;