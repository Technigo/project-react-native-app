import React, { useState, useEffect, useRef, useCallback } from "react";
import { Animated } from "react-native";
import * as Haptics from "expo-haptics";
import { Accelerometer } from "expo-sensors";
import { answers } from "./Answers";
import { QuoteText, TextWrapper } from "./StyledComponents";

const isShakingEnough = (data) => {
  const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);
  return totalForce > 2.58;
};

const ShakeApi = () => {
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [answer, setAnswer] = useState("Ask me");
  const [subscription, setSubscription] = useState(null);
  const disable = useRef(false);

  const fadeAnim = useRef(new Animated.Value(1)).current;

  const fadeIn = useCallback(() => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
    }).start(({ finished }) => {
      if (finished) {
        disable.current = false;
      }
    });
  }, []);

  const fadeOut = useCallback(
    (nextValue) => {
      // Will change fadeAnim value to 0 in 3 seconds
      disable.current = true;
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
      }).start(({ finished }) => {
        if (finished) {
          setAnswer(nextValue);
          fadeIn();
        }
      });
    },
    [fadeIn]
  );

  useEffect(() => {
    Accelerometer.setUpdateInterval(50);
    subscribe();
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const now = Date.now();
    if (isShakingEnough(data) && !disable.current) {
      setAnswer((answer) => {
        if (answer !== "Ask me") {
          fadeOut("Ask me");
          Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
        } else {
          Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
          const randomReplyNumber = Math.floor(Math.random() * answers.length);
          fadeOut(answers[randomReplyNumber]);
        }
        return answer;
      });
    }
  }, [data]);

  const subscribe = () => {
    setSubscription(
      Accelerometer.addListener((accelerometerData) => {
        setData(accelerometerData);
      })
    );
  };

  const unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  return (
    <TextWrapper>
      <Animated.View
        style={{
          // Bind opacity to animated value
          opacity: fadeAnim,
        }}
      >
        <QuoteText>{answer}</QuoteText>
      </Animated.View>
    </TextWrapper>
  );
};

export default ShakeApi;
