import React, { useState, useEffect } from 'react';
import { Accelerometer } from 'expo-sensors';
import styled from 'styled-components/native';
import { useFonts, BioRhyme_400Regular } from '@expo-google-fonts/biorhyme'
import { Rubik_900Black } from '@expo-google-fonts/rubik'
import { AppLoading } from 'expo'


import answers  from '../data/answers'


const isShaking = (data) => {
  // x,y,z CAN be negative, force is directional
  // We take the absolute value and add them together
  // This gives us the total combined force on the device
  const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);

  // If this force exceeds some threshold, return true, otherwise false
  // Increase this threshold if you need your user to shake harder
  return totalForce > 2.38;
};

//Function to get a random number - use later on the array to get random Index. 
const getRandomWholeInt = (num) => {
  return Math.floor(Math.random() * num)
}

const ShakeView = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  alignt-items: center;
`;

const ShakeDataView = styled.View`
  display: flex;
  flex-direction: column;
  top: 100px;
`;

const ShakeQuestion = styled.Text`
  font-size: 30px;
  font-weight: 900;
  color: #FF9C2A;
  font-family: 'Rubik';
  border: 2px solid black;
`
const ShakeAnswer = styled.Text`
  text-align: center;
  font-size: 26px;
  color: #FF9C2A;
  font-family: 'BioRhyme';
  border: 2px solid black;
`

export const SensorComponent = () => {
  const [fontLoaded] = useFonts({
    'BioRhyme-Regular': require ('../assets/fonts/BioRhyme-Regular.ttf'),
    'Rubik-VariableFont-wght': require('../assets/fonts/Rubik-VariableFont_wght.ttf')
  })
  // This function determines how often our program reads the accelerometer data in milliseconds
  // https://docs.expo.io/versions/latest/sdk/accelerometer/#accelerometersetupdateintervalintervalms
  Accelerometer.setUpdateInterval(400);

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


  return (
    <ShakeView>
      {/* if answer it true shake again otherwose ask*/}
      <ShakeDataView>
        <ShakeQuestion>
          {answer ? 'Ask & Shake Again' : 'Ask, Shake & Get Enlightend'}
        </ShakeQuestion>
        {/* if answer is true show answer state - random array*/}
        {answer && <ShakeAnswer>{answer}</ShakeAnswer>}
        {/* {answer ? <ShakeTitle>{answer}</ShakeTitle> : null} */}
      </ShakeDataView>
    </ShakeView>
  );

}




/* if (!fontLoaded) {
  return <AppLoading />
} else {
  return (
    <ShakeView>
      <ShakeDataView>
        <ShakeQuestion>
          {answer ? "MORE QUESTIONS MORE SHAKES - SHAKE AGAIN" : "ASK, SHAKE AND YOU SHALL RECIEVE"}
        </ShakeQuestion>
        {answer && <ShakeTitle>{answer}</ShakeTitle>}
      </ShakeDataView>
    </ShakeView>
  );
}; */