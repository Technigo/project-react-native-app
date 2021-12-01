import React from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Dimensions,
} from "react-native";

import Snow from "react-native-snow-bg";
import BgImg from "./winterBg.jpg";

const { width, height } = Dimensions.get("window");

const ButtonApi: () => React$Node = () => {
  return (
    <>
      <Image source={BgImg} style={styles.bg} />
      <StatusBar barStyle="dark-content" />
      <View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Technigo winter app</Text>
        </View>
      </View>
      <Snow fullScreen snowflakesCount={150} fallSpeed="medium" />
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: "white",
  },
  bg: {
    width,
    height,
    position: "absolute",
  },
});

export default ButtonApi;
