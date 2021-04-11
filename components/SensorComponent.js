import React, { useState, useEffect } from "react";
import { Accelerometer } from "expo-sensors";
import styled from "styled-components/native";

import answers from "../data/answers";

// FUNCTIONS
const isShaking = (data) => {
  const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);
  return totalForce > 1.78;
};

const randomIndex = (number) => {
  return Math.floor(Math.random() * number);
};

// STYLED COMPONENTS
const ShakeView = styled.View`
  flex: 1;
`;

const ShakeQuestion = styled.Text`
  font-weight: bold;
  text-align: center;
  color: #1B3359;
`;

const ShakeAlert = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #2D69AD;
  text-align: center;
  margin: 20px;
`;

export const SensorComponent = () => {
  Accelerometer.setUpdateInterval(400);

  const [answer, setAnswer] = useState(undefined);
  const [subscription, setSubscription] = useState(null);

  const _subscribe = () => {
    setSubscription(
      Accelerometer.addListener((accelerometerData) => {
        if (isShaking(accelerometerData)) {
          const answerIndex = randomIndex(answers.length);
          setAnswer(answers[answerIndex]);
        }
      })
    );
  };

  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  useEffect(() => {
    _subscribe();
    return () => _unsubscribe();
  }, []);

  return (
    <ShakeView>
      <ShakeQuestion>
        {answer ? "Ask a new question and shake me again" : "Ask a yes/ no question and shake me for an answer"}
      </ShakeQuestion>
        {answer ? <ShakeAlert>{answer}</ShakeAlert> : null}
    </ShakeView>
  );
};
