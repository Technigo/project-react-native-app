import React, { useRef, useState, useEffect } from "react";
import {
  Animated,
  Easing,
  Text,
  View,
  StyleSheet,
  Button,
  Image,
} from "react-native";
import styled from "styled-components/native";
import RandomAnswer from "./Answers";
import { ShakeEvent } from "./ShakeEvent";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const FadingText = styled.Text`
  font-size: 28px;
  text-align: center;
  margin: 10px;
`;

const ButtonRow = styled.View`
  flex-direction: column;
  margin-vertical: 16px;
  justify-content: space-around;
`;

const StyledButton = styled.Button`
  margin: 16px;
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

  const handleAnimation = () => {
    // A loop is needed for continuous animation
    Animated.loop;
    // Animation consists of a sequence of steps
    Animated.sequence([
      // start rotation in one direction (only half the time is needed)
      Animated.timing(fadeAnim, {
        toValue: 1.0,
        duration: 50,
        easing: Easing.bounce,
        useNativeDriver: true,
      }),
      // rotate in other direction, to minimum value (= twice the duration of above)
      Animated.timing(fadeAnim, {
        toValue: -1.0,
        duration: 100,
        easing: Easing.bounce,
        useNativeDriver: true,
      }),
      // return to begin position
      Animated.timing(fadeAnim, {
        toValue: 0.0,
        duration: 50,
        easing: Easing.bounce,
        useNativeDriver: true,
      }),
    ]).start();
  };

  // // fadeAnim will be used as the value for opacity. Initial Value: 0
  // const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 8000,
    }).start();
  };

  const shakeEightBall = () => {
    if (viewBall) {
      fadeIn();
      setTimeout(() => setViewBall(!viewBall), 1000);
    }
  };

  // const onRefresh = () => {
  //   window.location.reload(false);
  // };
  const reset = () => {
    if (!viewBall) {
      setViewBall(!viewBall);
    }
  };

  return (
    <Container>
      <Animated.Image
        source={backgroundImage}
        resizeMode='contain'
        style={{
          transform: [
            {
              rotate: fadeAnim.interpolate({
                inputRange: [-1, 1],
                outputRange: ["-0.5rad", "0.5rad"],
              }),
            },
          ],
        }}
      />
      {viewBall ? (
        <ButtonRow>
          <StyledButton
            type='Button'
            title='Shake the Eightball'
            onPress={(handleAnimation, shakeEightBall)}
            color='red'
          />
        </ButtonRow>
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
          <StyledButton type='Button' title='Reset' onPress={reset} />
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
  },
});
