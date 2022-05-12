import React, { useState, useEffect } from "react";
import { Pedometer } from 'expo-sensors';
import { StyleSheet, Text, View } from 'react-native';
import CircularProgress from "react-native-circular-progress-indicator";


const SensorComponent = () => {
  const [pedometerAvailability, setPedometerAvailability] = useState("");
  const [stepCount, updateStepCount] = useState(0);

  let Dist = stepCount /1300;
  let DistanceCovered = Dist.toFixed(4)

  let cal = DistanceCovered * 60;
  let caloriesBurnt = cal.toFixed(4)

  useEffect(() => {
    subscribe();
  }, []);

  const subscribe = () => {
    const subscription = Pedometer.watchStepCount((result) => { 
        updateStepCount(result.steps);
      });
  

    Pedometer.isAvailableAsync().then(
      (result) => {
        setPedometerAvailability(String(result));
      },
      (error) => {
        setPedometerAvailability(error);
      }
    );
 };
  
    return (
      <View style={styles.container}>

        <Text style={styles.headingDesign}>Time to get up and go out for a walk!</Text>

        <View>
          <CircularProgress
          value={stepCount}
          maxValue={6500}
          radius={190}
          textColor={'#800000'}
          activeStrokeColor={'#000000'}
          inActiveStrokeColor={'#800000'}
          inActiveStrokeOpacity={0.5}
          inActiveStrokeWidth={50}
          activeStrokeWidth={50}
          title={'Step Count'}
          titleColor={'#800000'}
          titleStyle={{fontWeight: "bold"}}
          />
          </View>
    

        <View>
          <Text style={styles.textDesign}> Target : 6500 steps (5km)</Text>
      
          <Text style={styles.textDesign}> Distance Covered : {DistanceCovered} km </Text>
        
          <Text style={styles.textDesign}> Calories Burnt : {caloriesBurnt} </Text>
          </View>
      
      </View>
    );
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    backgroundColor: "#C0C0C0",
    opacity: 0.5,
  },

  headingDesign: {
    color: "white",
    backgroundColor: "#800000",
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Papyrus",
    margin: 20,
    padding: 5,
  },

  textDesign: {
    backgroundColor: "#800000",
    height: 50,
    width: "95%",
    borderColor: "#000",
    borderWidth: 3,
    borderRadius: 20,
    overflow: "hidden",
    fontSize: 25,
    color: "white",
    fontWeight: "bold",
    fontFamily: "Papyrus",
    alignSelf: "center",
    marginTop: 15,
    padding: 5,
  }
 }); 


export default SensorComponent;


