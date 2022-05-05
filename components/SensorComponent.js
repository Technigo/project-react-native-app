import React, { useState, useEffect } from "react";
import { Accelerometer } from "expo-sensors";
import styled from "styled-components/native";
import { Image } from 'react-native';

const isShaking = (data) => {
  const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);
  return totalForce > 1.78;
};

const ShakeView = styled.View`
  display: flex;
  flex-direction: column;
`;
const ShakeDataView = styled.View`
justify-content: center;
align-items: center;
margin-top: 40;
`;
const ShakeDataTitle = styled.Text`
  font-weight: bold;
  margin-top: 40;
  color: tomato;
  font-size: 20;
`;
const ShakeData = styled.Text`
border-radius: 50;
`;

export const SensorComponent = () => {
  const  [quote, setQuote] =useState({})

  const generateQuote = () => {
    fetch('https://foodish-api.herokuapp.com/api/')
    .then(response => response.json())
    .then(data => setQuote(data))
}

useEffect(()=> {
    generateQuote();
}, []);

  Accelerometer.setUpdateInterval(400);

  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });

  const [subscription, setSubscription] = useState(null);

  const _subscribe = () => {
    setSubscription(
      Accelerometer.addListener((accelerometerData) => {
        setData(accelerometerData);
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
      {isShaking(data) && generateQuote()}
      <ShakeDataView>
        <ShakeData>
            <Image
              style={{
                width: 300,
                height: 300,
                resizeMode: 'contain'
              }}
              source={{ uri: quote.image }}
            />
            </ShakeData>
        <ShakeDataTitle>Shake your device to find out</ShakeDataTitle>
      </ShakeDataView>
    </ShakeView>
  );
};
