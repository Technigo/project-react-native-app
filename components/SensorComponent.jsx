import React, { useState, useEffect } from 'react';
import { Accelerometer } from 'expo-sensors';
import styled from 'styled-components/native';

import { Jokes } from './Jokes'


const ShakeView = styled.View`
    display:flex;
    width:100%
    justify-content:center;
    align-items:center;
`;


const isShaking = (data) => {
  const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);
  return totalForce > 2;
};


export const SensorComponent = () => {
  Accelerometer.setUpdateInterval(500)


  const [subscription, setSubscription] = useState(null)
  const [joke, setJoke] = useState([])
  const [fetchingPaused, setFetchingPaused] = useState(false)

  const _subscribe = () => {
    setSubscription(

      Accelerometer.addListener((accelerometerData) => {
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


  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  useEffect(() => {
    _subscribe();

    return () => _unsubscribe();
  }, []);



  return (
    <ShakeView>
      <Jokes setup={joke.setup} punchline={joke.punchline} />
    </ShakeView>
  );
};