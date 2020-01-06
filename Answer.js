import React, { useState, useEffect } from "react";
import { Animated, Text, View } from "react-native";
import EightBallAnswers from "./AnswersArray";

const FadeInView = props => {
  const [fadeAnim] = useState(new Animated.Value(0)); // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000
    }).start();
  }, []);

  return (
    <Animated.View // Special animatable View
      style={{
        opacity: fadeAnim // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
};

// You can then use your FadeInView in place of a View in your components:
export default () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <FadeInView>
        <Text style={{ fontSize: 28, color: "white" }}>
          {
            EightBallAnswers[
            Math.floor(Math.random() * EightBallAnswers.length)
            ]
          }
        </Text>
      </FadeInView>
    </View>
  );
};