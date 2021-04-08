import React, { useState, useEffect } from 'react';
import { Accelerometer } from 'expo-sensors';
import styled from 'styled-components/native';
import { Jokes } from './Jokes'


// ==========================
// = Functions
const isShaking = (data) => {
  const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);

  // If this force exceeds some threshold, return true, otherwise false
  // Increase this threshold if you need your user to shake harder
  return totalForce > 2;
};


const ShakeView = styled.View`
    display:flex;
    width:100%
    justify-content:center;
    align-items:center;
`;


export const SensorComponent = () => {
  // This function determines how often our program reads the accelerometer data in milliseconds
  // https://docs.expo.io/versions/latest/sdk/accelerometer/#accelerometersetupdateintervalintervalms
  Accelerometer.setUpdateInterval(500)

  // This keeps track of whether we are listening to the Accelerometer data
  const [subscription, setSubscription] = useState(null)
  const [joke, setJoke] = useState([])
  const [fetchingPaused, setFetchingPaused] = useState(false)

  const _subscribe = () => {
    // Save the subscription so we can stop using the accelerometer later
    setSubscription(
      // This is what actually starts reading the data
      Accelerometer.addListener((accelerometerData) => {
        // Whenever this function is called, we have received new data
        // The frequency of this function is controlled by setUpdateInterval
        if (isShaking(accelerometerData)) {
            setFetchingPaused(true)
            fetch('https://official-joke-api.appspot.com/random_joke')
            .then((res) => res.json())
            .then((json) => {
              setJoke(json)
            })
        } else {
            setFetchingPaused(false)
        }
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
      <Jokes setup={joke.setup} punchline={joke.punchline} />
    </ShakeView>
  );
};