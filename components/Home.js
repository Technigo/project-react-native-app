import React, { useRef } from "react";
import { Animated, PanResponder, StyleSheet, View, Text } from "react-native";
import LottieView from "lottie-react-native";
import styled from "styled-components/native";

const ViewContainer = styled.View`
  background-color: powderblue;
`;

const FirstText = styled.Text`
  font-size: 50px;
  text-transform: uppercase;
  color: #ff73e3;
`;

const Home = () => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([
      null,
      {
        dx: pan.x,
        dy: pan.y,
      },
    ]),
    onPanResponderRelease: () => {
      Animated.spring(pan, { toValue: { x: 0, y: 0 } }).start();
    },
  });

  return (
    <ViewContainer style={styles.container}>
      <FirstText>Welcome!</FirstText>
      <LottieView
        source={require("../assets/ball.json")}
        style={{
          width: 300,
          height: 300,
        }}
        autoPlay
      />
      <Animated.View
        {...panResponder.panHandlers}
        style={[pan.getLayout(), styles.box]}
      />
    </ViewContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    backgroundColor: "#630aff",
    width: 80,
    height: 80,
    borderRadius: 500,
  },
});

export default Home;
