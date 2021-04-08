import React, { useState, useEffect } from "react";
import { Accelerometer } from "expo-sensors";
import styled from "styled-components/native";

import answers from "../data/answers";

// FUNCTIONS
// The total combined force on the device
const isShaking = (data) => {
  const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);
  // If this force exceeds some threshold, return true, otherwise false
  return totalForce > 1.78;
};

// Get random answer
const randomIndex = (number) => {
  return Math.floor(Math.random() * number);
};

// STYLED COMPONENTS
const ShakeView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ShakeDataView = styled.View``;

const ShakeAlert = styled.Text`
  font-size: 36px;
  font-weight: bold;
  color: black;
  text-align: center;
  margin: 20px;
  background-color: lightgray;
`;

const ShakeDataTitle = styled.Text`
  font-weight: bold;
  text-align: center;
  background-color: lightgray;
`;

const ShakeData = styled.Text``;

// This function determines how often our program reads the accelerometer data in milliseconds
// https://docs.expo.io/versions/latest/sdk/accelerometer/#accelerometersetupdateintervalintervalms
export const SensorComponent = () => {
  Accelerometer.setUpdateInterval(400);

  const [answer, setAnswer] = useState(undefined);
  // const [data, setData] = useState({x: 0, y: 0, z: 0});
  // This keeps track of whether we are listening to the Accelerometer data
  const [subscription, setSubscription] = useState(null);

  const _subscribe = () => {
    // Save the subscription so we can stop using the accelerometer later
    setSubscription(
      // This is what actually starts reading the data
      Accelerometer.addListener((accelerometerData) => {
        // Whenever this function is called, we have received new data
        if (isShaking(accelerometerData)) {
          const answerIndex = randomIndex(answers.length);
          setAnswer(answers[answerIndex]);
        }
      })
    );
  };

  // Tell the device to stop reading Accelerometer data, otherwise our device will become slow and drain battery
  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  useEffect(() => {
    // Start listening to the data when this SensorComponent is active
    _subscribe();
    // Stop listening to the data when we leave SensorComponent
    return () => _unsubscribe();
  }, []);

  return (
    <ShakeView>
      <ShakeDataView>
        <ShakeDataTitle>
          {answer ? "Ask a new question and shake me again" : "Ask a yes/ no question and shake me for an answer"}
        </ShakeDataTitle>
        {answer ? <ShakeAlert>{answer}</ShakeAlert> : null}
      </ShakeDataView>
    </ShakeView>
  );
};
