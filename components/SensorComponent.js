import React, { useState, useEffect } from "react";
import { Pedometer } from 'expo-sensors';
import { StyleSheet, Text, View } from 'react-native';
import CircularProgress from "react-native-circular-progress-indicator";


const SensorComponent = () => {
  const [PedometerAvailability, setPedometerAvailability] = useState("");
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
      })
  

    Pedometer.isAvailableAsync().then(
      (result) => {
        setPedometerAvailability(String(result));
      },
      (error) => {
        setPedometerAvailability(error);
      }
    )
 };
  
    return (
      <View style={styles.container}>

        <View style={{ flex:1, justifyContent: "center"}}>
        <Text style={styles.headingDesign}>
          Is Pedometer available on the device: {PedometerAvailability}
          </Text>
    
        <View style={{flex:3}}>
          <CircularProgress
          value={stepCount}
          maxValue={6500}
          radius={210}
          textColor={'#800000'}
          activeStrokeColor={'#000000'}
          inActiveStrokeColor={'800000'}
          inActiveStrokeOpacity={0.5}
          inActiveStrokeWidth={40}
          activeStrokeWidth={40}
          title={'Step Count'}
          titleColor={'#800000'}
          titleStyle={{fontWeight: "bold"}}
          />

        </View>
        <View style={{flex:1}}>

        <View style={{flex:1}}>
          <Text style={[styles.textDesign, {
            paddingLeft : 20, marginLeft : "23%" 
          }, 
          ]}>
            Target : 6500 steps(5km)
          </Text>
        </View>

        <View style={{flex:1}}>
          <Text style={[styles.textDesign, {
            width: "93%", paddingLeft: 20, marginLeft: "-3.5%" 
          }, 
          ]}>
            Distance Covered : {DistanceCovered} km
          </Text>
        </View>

        <View style={{flex:1}}>
          <Text style={[styles.textDesign, {
            paddingLeft: 10, marginLeft: "23%" 
          }, 
          ]}>
            Calories Burnt : {caloriesBurnt}
          </Text>
        </View>

        </View>

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
    backgroundColor: "rgba(155,89,182,0.5)",
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Papyrus",
  },

  textDesign: {
    backgroundColor: "rgba(155,89,182,0.5)",
    height: 50,
    width: "85%",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 20,
    overflow: "hidden",
    fontSize: 25,
    color: "white",
    fontWeight: "bold",
    fontFamily: "Papyrus"
  }
 }); 


export default SensorComponent;


