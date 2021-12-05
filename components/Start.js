import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import LottieView from "lottie-react-native";
import { useFonts, Coiny_400Regular } from "@expo-google-fonts/coiny";
import Snow from "react-native-snow-bg";
import BgImg from "./winterBg.jpg";

const { width, height } = Dimensions.get("window");

const Start: () => React$Node = () => {
  const [fontsLoaded] = useFonts({
    Coiny_400Regular,
  });
  const [loading, setLoading] = useState(false);
  const fontSize = 40;
  const paddingVertical = 6;
  const color = "white";

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  } else {
    return (
      <>
        <Image source={BgImg} style={styles.bg} />
        <StatusBar barStyle="dark-content" />
        <View>
          <View style={styles.sectionContainer}>
            <Text
              style={{
                color,
                fontSize,
                paddingVertical,
                fontFamily: "Coiny_400Regular",
              }}
            >
              Winter app
            </Text>
          </View>
        </View>
        <Snow fullScreen snowflakesCount={150} fallSpeed="medium" />
        <LottieView
          source={require("./lotties/santa.json")}
          style={{ width: 150, height: 150 }}
          autoPlay
        />
      </>
    );
  }
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 150,
    paddingHorizontal: 24,
    alignItems: "center",
    justifyContent: "center",
  },

  bg: {
    width,
    height,
    position: "absolute",
  },
});

export default Start;
