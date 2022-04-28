import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { Pedometer } from "expo-sensors";
import CircularProgress from "react-native-circular-progress-indicator";

const StepCounter = () => {
  const [pedometerAvailable, setPedometerAvailable] = useState("");
  const [stepCount, currentStepCount] = useState(0);

  // you walk approximately 1300 steps in 1 km
  const distance = stepCount / 1300;
  // the toFixed shorten to only 4 in this case the decimals of the steps
  const distanceCovered = distance.toFixed(4);

  // you burn approximately 60 calories in 1 km
  const calories = distanceCovered * 60;
  const caloriesBurnt = calories.toFixed(4);

  useEffect(() => {
    subscribe();
  }, []);

  const subscribe = () => {
    Pedometer.watchStepCount((result) => {
      currentStepCount(result.steps);
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
    <View>
      <ImageBackground
        style={{ width: "100%", height: "100%" }}
        resizeMode='cover'
        source={require("../assets/running.png")}
      >
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>
            Step Counter: {pedometerAvailable}
          </Text>
          <View style={{ flex: 2 }}>
            <CircularProgress
              value={stepCount}
              maxValue={6500}
              radius={210}
              textColor={"#000"}
              activeStrokeColor={"#ecf0f1"}
              inActiveStrokeColor={"#9b59b6"}
              inActiveStrokeOpacity={0.5}
              inActiveStrokeWidth={40}
              activeStrokeWidth={40}
              title={"Step Count"}
              titleColor={"#000"}
              titleStyle={{ fontWeight: "bold" }}
            />
          </View>

          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>Target: 6500 steps(5km)</Text>
          </View>

          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>
              Distance Covered:
              {distanceCovered}km
            </Text>
          </View>

          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>
              Calories Burnt:
              {caloriesBurnt}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    justifyContent: "center",
  },

  titleText: {
    // fontFamily: "Roboto",
    color: "white",
    backgroundColor: "rgba(255,255,255,0.5)",
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 30,
  },

  descriptionContainer: {
    flex: 0.5,
    justifyContent: "center",
  },

  descriptionText: {
    backgroundColor: "rgba(255,255,255,0.5)",
    height: 50,
    width: "85%",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 20,
    overflow: "hidden",
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
});

export default StepCounter;
