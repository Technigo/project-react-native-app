import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { Accelerometer } from "expo-sensors";
import Animation from "./Animation";

const Wrapper = styled.View`
 background-color: #1B95D4;
 align-items: center;
 justify-content: center;
 padding: 30px;
 margin: 0;
`

const SetupText = styled.Text`
 color: white;
 font-weight: 400;
 font-size: 25px;
 margin-bottom: 25px;
 text-align: left;
 margin: 0px 30px 0 30px;
`

const ShakeApi = () => {

  const [joke, setJoke] = useState({})
    const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json'
    }
  };

  const generateJoke= () => {
        fetch('https://icanhazdadjoke.com', options)
        .then(response => response.json())
        .then(data => setJoke(data))
  };
   
  useEffect(() => {
    generateJoke();
  }, []);

  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [subscription, setSubscription] = useState(null);

  const subscribe = () => {
    setSubscription(
      Accelerometer.addListener(accelerometerData => {
        setData(accelerometerData);
      })
    );
  };

  const unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  useEffect(() => {
    subscribe();
    return () => unsubscribe();
  }, []);

  const isShaking = (data) => {
    const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);
    return totalForce > 1.78;
  }

  useEffect(() => {
    if (isShaking(data)) {
      generateJoke();
    }
  }, [data])

  return (
    <Wrapper>
      <SetupText>{joke.joke}</SetupText>
      <Animation />
    </Wrapper>
  )
};

export default ShakeApi;