import React, { useState, useEffect } from "react";
import { Animated, Easing } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Answer from "./Answer";
import Eightball from "./EightBall";
import { ShakeEventExpo } from "./ShakeEventExpo";
import animationRanges from "./animationRanges";

const App = () => {
  const [viewOne, setViewOne] = useState(true);
  const animation = new Animated.Value(0);

  useEffect(() => {
    ShakeEventExpo.addListener(() => {
      shakeEightBall();
    });

    return () => {
      // Clean up the subscription
      ShakeEventExpo.removeListener();
    };
  }, []);

  const shakeEightBall = () => {
    if (viewOne) {
      triggerAnimation();
      setTimeout(() => setViewOne(!viewOne), 2000);
    }
  };

  const reset = () => {
    if (!viewOne) {
      setViewOne(!viewOne);
    }
  };

  const triggerAnimation = () => {
    animation.setValue(0);
    Animated.timing(animation, {
      duration: 2000,
      toValue: 10,
      ease: Easing.bounce
    }).start();
  };

  const interpolated = animation.interpolate(animationRanges);

  return (
    <LinearGradient
      colors={["#f08", "#d0e", "#91f", "#70f", "#40f", "#05f", "#09f"]}
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      onStartShouldSetResponder={() => reset()}
    >
      {viewOne ? (
        <Animated.View
          style={{
            transform: [{ translateX: interpolated }]
          }}
        >
          <Eightball />
        </Animated.View>
      ) : (
          <Answer />
        )}
    </LinearGradient>
  );
};

export default App;