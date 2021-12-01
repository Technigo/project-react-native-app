import React from "react";
import { View, Image, Animated } from "react-native";
import styled, { keyframes } from "styled-components/native";

const LoadingContainer = styled.View`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadingImage = styled.Image`
  width: 50;
  height: 50;
  filter: invert(48%) sepia(62%) saturate(1919%) hue-rotate(320deg)
    brightness(104%) contrast(103%); ;
`;

const Loading = () => {
  spinValue = new Animated.Value(0);

  // First set up animation
  Animated.loop(
    Animated.timing(this.spinValue, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear, // Easing is an additional import from react-native
      useNativeDriver: true, // To make use of native driver for performance
    })
  ).start();

  // Next, interpolate beginning and end values (in this case 0 and 1)
  const spin = this.spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });
  return (
    <LoadingContainer>
      <LoadingImage
        source={require("../assets/loadingSymbol.svg")}
        style={{ transform: [{ rotate: spin }] }}
        alt="popcorn"
      />
    </LoadingContainer>
  );
};

export default Loading;
