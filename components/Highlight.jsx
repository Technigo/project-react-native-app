import React, { useEffect, useRef } from "react";
import { Animated } from "react-native";
import { Blinking } from "../styles/Style";

export default function Highlight({ message }) {
  const fadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 2000,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  return (
    <Animated.View
      style={[
        {
          // Bind opacity to animated value
          opacity: fadeAnim,
        },
      ]}
    >
      <Blinking>{message}</Blinking>
    </Animated.View>
  );
}
