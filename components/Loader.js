import React from "react";
import LottieView from "lottie-react-native";

const Loader = () => {
  return (
    <LottieView
      style={{ height: 350, width: 350 }}
      source={require("../assets/loader.json")}
      autoPlay
      loop
    />
  );
};

export default Loader;
