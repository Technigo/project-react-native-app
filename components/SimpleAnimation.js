import React from "react";
import { StyleSheet, View } from "react-native";

import LottieView from "lottie-react-native";

const SimpleAnimation = () => {
  return (
    <View>
      <LottieView
        source={require("../assets/3938-action.json")}

      />
    </View>
  );
}

//const styles = StyleSheet.create({
//  animation: {
//    width: 100,
//    height: 100,
//  },
//});

export default SimpleAnimation;

// tutorial: https://betterprogramming.pub/how-to-create-animations-with-lottie-react-native-788a87cf8d94

