import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Pedometer } from "expo-sensors";
import CircularProgress from "react-native-circular-progress-indicator";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
  },
  counterContainer: {
    paddingTop: 50,
  },
  counterText: {
    padding: 5,
    fontSize: 20,
    color: "#FFAB93",
    fontWeight: "bold",
  },
});

const SensorComponent = () => {
  const [pedometerAvailable, setPedometerAvailable] = useState("");
  //To be able to update the steps
  const [stepCount, updateStepCount] = useState(0);

  let Distance = stepCount / 1300;
  let DistansCover = Distance.toFixed(4);

  //To see if the pedometer is available this function is used
  useEffect(() => {
    subscribe();
  }, []);

  const subscribe = () => {
    const subscription = Pedometer.watchStepCount((result) => {
      updateStepCount(result.steps);
    });

    Pedometer.isAvailableAsync().then(
      (result) => {
        setPedometerAvailable(String(result));
      },
      (error) => {
        setPedometerAvailable(error);
      }
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}></Text>
      <View>
        <CircularProgress
          value={stepCount}
          maxValue={6500}
          radius={180}
          textColor={"#ecf0f1"}
          activeStrokeColor={"#FFAB93"}
          inActiveStrokeColor={"#7594b5"}
          inActiveStrokeOpacity={0.5}
          inActiveStrokeWidth={40}
          activeStrokeWidth={40}
          title={"StepCount"}
          titleColor={"#fb4f1d"}
          titleStyle={{ fontWeight: "bold" }}
        />
      </View>
      <View style={styles.counterContainer}>
        <Text style={styles.counterText}>Target: 6500 steps (5 km)</Text>
        <Text style={styles.counterText}>Distance: {DistansCover} km </Text>
      </View>
    </View>
  );
};

export default SensorComponent;
