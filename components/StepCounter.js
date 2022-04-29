import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import { Pedometer } from "expo-sensors";
import CircularProgress from "react-native-circular-progress-indicator";

const StepCounter = () => {
  const [pedometerAvailable, setPedometerAvailable] = useState("");
  const [stepCount, currentStepCount] = useState(0);

  // you walk approximately 1300 steps in 1 km
  const distance = stepCount / 1300;
  // the toFixed shorten to only 4 in this case the decimals of the steps
  const distanceCovered = distance.toFixed(2);

  // you burn approximately 60 calories in 1 km
  const calories = distanceCovered * 60;
  const caloriesBurnt = calories.toFixed(2);

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
    <View style={{ justifyContent: "center", height: "100%" }}>
      <View>
        <Text style={styles.titleText}>
          Hey,{"\n"}
          welcome to your daily step Tracker!
        </Text>
      </View>
      <ImageBackground
        style={styles.ImageBackground}
        resizeMode='cover'
        source={require("../assets/run.jpg")}
      >
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>
            {/* shows if the pedometer is true or false */}
            {/* Step Counter:{pedometerAvailable} */}
          </Text>
          <View style={{ alignItems: "center" }}>
            <CircularProgress
              value={stepCount}
              maxValue={6500}
              radius={140}
              textColor={"#000"}
              activeStrokeColor={"#a8a8a8"}
              inActiveStrokeColor={"rgb(99, 121, 230, 0.5)"}
              inActiveStrokeOpacity={0.5}
              inActiveStrokeWidth={40}
              activeStrokeWidth={40}
              title={"Step Count"}
              titleColor={"#a8a8a8"}
              titleStyle={{ fontWeight: "bold" }}
            />
          </View>
        </View>
      </ImageBackground>

      <View style={styles.descriptionContainer}>
        <Image
          style={styles.roadImg}
          source={require("../assets/road3.0.png")}
        />
        <View style={styles.iconContainer}>
          <Image
            style={styles.icon}
            source={require("../assets/steps2.0.png")}
          />
          <Text style={styles.boldDescription}>
            Target: &nbsp;
            <Text style={styles.descriptionText}>6500 steps(5km)</Text>
          </Text>
        </View>

        <View style={styles.iconContainer}>
          <Image
            style={styles.icon}
            source={require("../assets/walking2.0.png")}
          />
          <Text style={styles.boldDescription}>
            Distance: &nbsp;
            <Text style={styles.descriptionText}>{distanceCovered}km</Text>
          </Text>
        </View>

        <View style={styles.iconContainer}>
          <Image
            style={styles.icon}
            source={require("../assets/burn2.0.png")}
          />
          <Text style={styles.boldDescription}>
            Calories: &nbsp;
            <Text style={styles.descriptionText}>{caloriesBurnt}Cl</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ImageBackground: {
    width: "100%",
  },

  textContainer: {
    alignContent: "center",
  },

  titleText: {
    color: "#000",
    backgroundColor: "rgba(255,255,255,0.5)",
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 30,
  },

  descriptionContainer: {
    // flex: 0.5,
    justifyContent: "center",
    backgroundColor: "#6379E6",
    borderRadius: 20,
    padding: 8,
    margin: 8,
    height: 200,
  },

  roadImg: {
    position: "absolute",
    height: 250,
    top: 0,
    bottom: 0,
    left: 210,
    right: 0,
  },

  boldDescription: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 20,
  },

  descriptionText: {
    height: 50,
    width: "85%",
    borderRadius: 20,
    color: "white",
    fontWeight: "400",

    fontSize: 18,
  },

  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  icon: {
    width: 40,
    height: 40,
  },
});

export default StepCounter;
