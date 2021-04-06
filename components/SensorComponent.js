import React, { useState, useEffect } from 'react';
import { Accelerometer } from 'expo-sensors';
import styled from 'styled-components/native';


const JOKE_URL = "https://official-joke-api.appspot.com/random_joke";
let newJokeCounter = 0; // counter to trigger fetch of new joke
//let lastUpdate = new Date();

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

// ==========================
// = Styled components
const JokeView = styled.View`
  display: flex;
  flex-direction: column;
`;

const ShakeAlert = styled.Text`
  font-size: 36px;
  font-weight: bold;
  text-align:center;
  color: #aa0000;
`;

const ShakeDataView = styled.View`
  margin: 10px;
`;

const JokeQuestion = styled.Text`
  font-size: 20px;
  font-weight: bold;
  text-align:center;
`;
const JokePunchline = styled.Text`
  font-size: 20px;
  text-align:center;
  color: black;
`;

export const SensorComponent = () => {


  const timeToUpdateJoke = () =>{
    //let time = new Date();
    //if ((time-lastUpdate)>500) // if 500 ms since we last changed the joke
    {
      //
      if (joke != null)
      {
        joke.punchline = "";
        joke.setup = "L o a d i n g";
      }
      newJokeCounter++;

      console.log("test:" + newJokeCounter);
      //lastUpdate = time;
    }
  };


  let [joke, setJoke] = useState([]);

  useEffect(() => {
      fetch(JOKE_URL)
      .then(res => res.json())
      .then(json => {
          setJoke(json)
          console.log(json);
      })
  }, [newJokeCounter]);




  // This function determines how often our program reads the accelerometer data in milliseconds
  // https://docs.expo.io/versions/latest/sdk/accelerometer/#accelerometersetupdateintervalintervalms
  Accelerometer.setUpdateInterval(400);

  // The accelerometer returns three numbers (x,y,z) which represent the force currently applied to the device
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });

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
    <JokeView>
      {isShaking(data) &&
        <ShakeAlert>
          Shaking up a new joke!
          { timeToUpdateJoke() }
        </ShakeAlert> }

      {!isShaking(data) &&
      <ShakeDataView>
        <JokeQuestion>{joke.setup}</JokeQuestion>
        <JokePunchline>{joke.punchline}</JokePunchline>
      </ShakeDataView>}
    </JokeView>
  );
};
