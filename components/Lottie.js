import React from "react";
import LottieView from "lottie-react-native";

export const Lottie = () => {
  return (
    <LottieView
      source={require("../images/beeranimation.json")}
      style={{
        width: 400,
        height: 400,
        backgroundColor: "#fcfaf1",
      }}
      autoPlay
    />
  );
};
