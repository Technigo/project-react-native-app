import React, { useRef, useState, useEffect } from "react";
import { Animated, Text, StyleSheet } from "react-native";
import styled from "styled-components/native";
import RandomAnswer from "./Answers";
import { ShakeEvent } from "./ShakeEvent";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 28px;
  margin-bottom: 28px;
`;

const FadingText = styled.Text`
  font-size: 28px;
  text-align: center;
  margin: 10px;
`;

const ShakeButton = styled.TouchableOpacity`
  background-color: lightgrey;
  display: flex;
  padding: 16px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  border-radius: 20px;
`;

const ResetButton = styled.TouchableOpacity`
  background-color: #dddddd;
  display: flex;
  padding: 16px;
  justify-content: center;
  align-items: center;
`;

export default function App() {
  const [viewBall, setViewBall] = useState(true);
  const backgroundImage = require("./magicBallStart.png");
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    ShakeEvent.addListener(() => {
      shakeEightBall();
    });

    return () => {
      // Clean up the subscription
      ShakeEvent.removeListener();
    };
  }, []);

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 6000,
    }).start();
  };

  const shakeEightBall = () => {
    if (viewBall) {
      fadeIn();
      setTimeout(() => setViewBall(!viewBall), 1000);
    }
  };

  const reset = () => {
    if (!viewBall) {
      setViewBall(true);
    }
  };

  return (
    <Container>
      <Title>Ask the Eightball anything!</Title>
      <Animated.Image source={backgroundImage} resizeMode='contain' />
      {viewBall ? (
        <ShakeButton onPress={shakeEightBall}>
          <Text>Shake your phone</Text>
          <Text>reveal the answer!</Text>
        </ShakeButton>
      ) : (
        <Animated.View
          style={[
            styles.fadingContainer,
            {
              opacity: fadeAnim, // Bind opacity to animated value
            },
          ]}
        >
          <FadingText>
            {" "}
            <RandomAnswer />
          </FadingText>
          <ResetButton onPress={reset}>
            <Text>Reset</Text>
          </ResetButton>
        </Animated.View>
      )}
    </Container>
  );
}

const styles = StyleSheet.create({
  fadingContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "powderblue",
    marginTop: 20,
    borderRadius: 20,
  },
});
