import React from "react";
import { Animated, Easing } from "react-native";
import styled from "styled-components/native";

const LoadingContainer = styled.View`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: ${(props) => props.theme.colors.background};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const Loading = () => {
  let rotateValueHolder = new Animated.Value(0);

  const startImageRotateFunction = () => {
    rotateValueHolder.setValue(0);
    Animated.timing(rotateValueHolder, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(() => startImageRotateFunction());
  };

  startImageRotateFunction();

  const rotateData = rotateValueHolder.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <LoadingContainer>
      <Animated.Image
        source={require("../assets/loadingSymbol.png")}
        style={{
          width: 50,
          height: 50,
          /* source for changing color of svg https://codepen.io/sosuke/pen/Pjoqqp*/
          transform: [{ rotate: rotateData }],
        }}
      />
    </LoadingContainer>
  );
};

export default Loading;
