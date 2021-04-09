import React, { useState, useEffect } from 'react';
import { Accelerometer } from 'expo-sensors';
import styled from 'styled-components/native';

import answers  from '../data/answers'


// ==========================
// = Functions
const isShaking = (data) => {
  // x,y,z CAN be negative, force is directional
  // We take the absolute value and add them together
  // This gives us the total combined force on the device
  const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);

  // If this force exceeds some threshold, return true, otherwise false
  // Increase this threshold if you need your user to shake harder
  return totalForce > 1.78;
};

//Function to get a random number - use later on the array to get random Index. 
const getRandomWholeInt = (num) => {
  return Math.floor(Math.random() * num)
}

// ==========================
// = Styled components
const ShakeView = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ShakeAlert = styled.Text`
  font-size: 36px;
  font-weight: bold;
  color: #aa0000;
`;
const ShakeDataView = styled.View``;
const ShakeDataTitle = styled.Text`
  font-weight: bold;
`;
const ShakeData = styled.Text``;

export const SensorComponent = () => {
  // This function determines how often our program reads the accelerometer data in milliseconds
  // https://docs.expo.io/versions/latest/sdk/accelerometer/#accelerometersetupdateintervalintervalms
  Accelerometer.setUpdateInterval(400);

  // The accelerometer returns three numbers (x,y,z) which represent the force currently applied to the device
 /*  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  }); */

 

  // This keeps track of whether we are listening to the Accelerometer data
  //Subscription by default false
  const [subscription, setSubscription] = useState(null);
  //Set state as undefined so its default to false
  const [answer, setAnswer] = useState(undefined)

  const _subscribe = () => {
    // Save the subscription so we can stop using the accelerometer later
    setSubscription(
      // This is what actually starts reading the data
      Accelerometer.addListener((accelerometerData) => {
        // Whenever this function is called, we have received new data
        // The frequency of this function is controlled by setUpdateInterval
        // setData(accelerometerData);
        if(isShaking(accelerometerData)){
          const randomIndex = getRandomWholeInt(answers.length)
          setAnswer(answers[randomIndex])
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

 /* const [answer, setAnswer] = useState(0)

  useEffect( () => {
    !isShaking(data) && setAnswer(answers[Math.floor(Math.random() * answers.length)])
    console.log(answer)
  }, [isShaking]) 

  console.log(isShaking(data)) */

  return (
    <ShakeView>
      {/* 
      If isShaking returns true:
        - We could render conditionally
        - Maybe we want to dispatch some redux event when device shakes?
        - Maybe change some styled props? 
      */}
      {/* if answer it true shake again otherwose ask*/}
      <ShakeDataView>
        <ShakeDataTitle>
          {answer ? "Shake again and find your answers" : "Ask, shake and you shall receive"}
        </ShakeDataTitle>
        {/* ifg answer is true show answer state - random array*/}
        {answer ? <ShakeData>{answer}</ShakeData> : null}
        <ShakeData></ShakeData>
        <ShakeData></ShakeData>
      </ShakeDataView>
    </ShakeView>
  );
};
