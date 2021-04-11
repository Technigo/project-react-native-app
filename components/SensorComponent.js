import React, { useState, useEffect } from 'react';
import { Accelerometer } from 'expo-sensors';
import styled from 'styled-components/native';


// ==========================
// = Functions
const isShaking = (data) => {
 
  const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);

  // If this force exceeds some threshold, return true, otherwise false
  // Increase this threshold if you need your user to shake harder
  return totalForce > 1.78;
  
};

// ==========================
// = Styled components
const ShakeView = styled.View`
  flex: 1;
  background-color: magenta;
  justify-content: center;
  align-items: center;
`;

const ShakeText = styled.Text`
  font-size: 40px;
  font-weight: bold;
  color: yellow;
`;

export const SensorComponent = () => {
  // This function determines how often our program reads the accelerometer data in milliseconds
  // https://docs.expo.io/versions/latest/sdk/accelerometer/#accelerometersetupdateintervalintervalms
  Accelerometer.setUpdateInterval(800);

  // The accelerometer returns three numbers (x,y,z) which represent the force currently applied to the device
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  
  const [todaysOutfit, setTodaysOutfit] = useState('');
  let outfits = ["pyjamas", "dress", "jumpsuit", "suit", "nothing", "overall", "swimsuit", "yeti costume", "jeans & t-shirt", "kaftan"]
    
  useEffect(() => {
    if (isShaking(data)){
      setTodaysOutfit("Picking outfit")
      setTimeout(() => {setTodaysOutfit(outfits[Math.floor(Math.random()*outfits.length)])}, 1000)
    }
  }, [data])

  // This keeps track of whether we are listening to the Accelerometer data
  const [subscription, setSubscription] = useState(null);

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

  return (
    <ShakeView>
      <ShakeText>{todaysOutfit}</ShakeText>
    </ShakeView>
  );
};
