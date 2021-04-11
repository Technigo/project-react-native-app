import React, { useState, useEffect } from "react";
import { Accelerometer } from "expo-sensors";
import styled from "styled-components/native";
import "react-native-gesture-handler";

// ==========================
// = Functions
const isShaking = (data) => {
  const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);
  return totalForce > 1.78;
};


// ==========================
// = Styled components
const ShakeView = styled.View`
  display: flex;
  flex-direction: column;
`;

const ShakeAlert = styled.Text`
  font-size: 36px;
  font-weight: bold;
  color: #aa0000;
`;
const ShakeDataView = styled.View`
  font-weight: bold;
`;

const ShakeData = styled.Text`
font-weight: bold;
color: black;`;

export const PlayGame = ({route}) => {
  const {hero} = route.params;
  Accelerometer.setUpdateInterval(400);
 /*  const {hero} = route.params; */

  // The accelerometer returns three numbers (x,y,z) which represent the force currently applied to the device
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });

  // This keeps track of whether we are listening to the Accelerometer data
  const [subscription, setSubscription] = useState(null);
  const [hit, setHit] = useState(false);
  
  const _subscribe = () => {
    // Save the subscription so we can stop using the accelerometer later
    setSubscription(
      // This is what actually starts reading the data
      Accelerometer.addListener((accelerometerData) => {
        // Whenever this function is called, we have received new data
        // The frequency of this function is controlled by setUpdateInterval
        setData(accelerometerData);
    
      })
    );
  };

  // This will tell the device to stop reading Accelerometer data.
  // If we don't do this our device will become slow and drain a lot of battery
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


 useEffect(() => {
  isShaking(data) && setHit(Math.random()*10)
 }, [isShaking(data)])

 console.log(hit)
  return (
    <ShakeView>
      {isShaking(data) && <ShakeAlert>Rolling</ShakeAlert>}
     {(hit>5)?(<ShakeData>yes  {hero} </ShakeData>):(<ShakeData>no {hero}</ShakeData>)}
    </ShakeView>
  );
};
