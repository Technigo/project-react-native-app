import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { Pedometer } from "expo-sensors";

export const StepCounter = () => {
  const end = new Date();
  const start = new Date();

  const [stepMeter, setStepMeter] = useState({
    isPedometerAvailable: "checking",
    pastStepCount: 0,
    currentStepCount: 0,
  });

  useEffect(() => {
    console.log("Hello", stepMeter);
    Pedometer.watchStepCount((result) => {
      setStepMeter({ ...stepMeter, currentStepCount: result.steps });
    });

    Pedometer.isAvailableAsync().then(
      (result) => {
        setStepMeter({ ...stepMeter, isPedometerAvailable: String(result) });
      },
      (error) => {
        setStepMeter({
          ...stepMeter,
          isPedometerAvailable: "Could not get isPedometerAvailable: " + error,
        });
      }
    );
  }, []);

  start.setDate(end.getDate() - 1);
  Pedometer.getStepCountAsync(start, end).then(
    (result) => {
      setStepMeter({ ...stepMeter, pastStepCount: result.steps });
    },
    (error) => {
      setStepMeter({
        ...stepMeter,
        pastStepCount: "Could not get stepCount: " + error,
      });
    }
  );
  return (
    <View>
      <Text>Hello</Text>
      <Text>
        {/* Pedometer.isAvailableAsync(): {stepMeter.isPedometerAvailable} */}
      </Text>
      <Text>Steps taken in the last 24 hours: {stepMeter.pastStepCount}</Text>
      <Text>Walk! And watch this go up: {stepMeter.currentStepCount}</Text>
    </View>
  );
};
