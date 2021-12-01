import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, TouchableHighlight } from "react-native";
import { Pedometer } from "expo-sensors";
import { ProgressChart } from "react-native-chart-kit";
import { Header } from "./Header";
import { SettingButton } from "./SettingButton";

const styles = StyleSheet.create({
  WalkText: {
    fontSize: 20,
    margin: 20,
    textAlign: "center",
  },
  ChartWrapper: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  StepCounterContainer: {},
});

export const StepCounter = ({ navigation }) => {
  const [isPedometerAvailable, setIsPedometerAvailable] = useState("checking");
  const [pastStepCount, setPastStepCount] = useState(0);
  const [currentStepCount, setCurrentStepCount] = useState(0);

  let subscription;

  const subscribe = () => {
    subscription = Pedometer.watchStepCount((result) => {
      setCurrentStepCount(result.steps);
    });

    Pedometer.isAvailableAsync().then(
      (result) => {
        setIsPedometerAvailable(result);
      },
      (error) => {
        setIsPedometerAvailable("Could not get isPedometerAvailable: " + error);
      }
    );

    const end = new Date();
    const start = new Date();
    start.setDate(end.getDate() - 1);
    Pedometer.getStepCountAsync(start, end).then(
      (result) => {
        setPastStepCount(result.steps);
      },
      (error) => {
        setPastStepCount("Could not get stepCount: " + error);
      }
    );
  };

  const unsubscribe = () => {
    subscription && subscription.remove();
    subscription = null;
  };

  useEffect(() => {
    subscribe();
    return () => unsubscribe();
  }, []);

  const chartConfig = {
    backgroundGradientFrom: "#ffffff",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#ffffff",
    backgroundGradientToOpacity: 0,

    color: (opacity = 1) => `rgba(0,94,124, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };
  const data = {
    data: [pastStepCount / 10000],
  };
  return (
    <View style={styles.StepCounterContainer}>
      <Header />
      {/* <Text>Pedometer.isAvailableAsync(): {isPedometerAvailable}</Text> */}
      <Text style={styles.WalkText}>
        You have taken {pastStepCount} in the last 24 hours
      </Text>
      {/* <Text>Walk! And watch this go up: {currentStepCount}</Text> */}
      <View style={styles.ChartWrapper}>
        <ProgressChart
          data={data}
          width={300}
          height={300}
          strokeWidth={30}
          radius={100}
          chartConfig={chartConfig}
          hideLegend={true}
        />
      </View>
      <Text style={styles.WalkText}>The daily goal is 10 000.</Text>
      <Text style={styles.WalkText}>Keep walking to reach your goal!</Text>
      <SettingButton onPress={() => navigation.navigate("Settings")} />
    </View>
  );
};
