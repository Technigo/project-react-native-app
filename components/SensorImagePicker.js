import React, { useState, useEffect } from 'react';
import { Accelerometer } from 'expo-sensors';
import styled from 'styled-components/native';
import { Text, Image } from 'react-native';

const isShaking = (data) => {
  const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);

  return totalForce > 1.78;
};

const ShakeView = styled.View`
  flex: 1;
`;

const ShakeAlert = styled.Text`
  font-size: 36px;
  font-weight: bold;
  color: #57E2E5;
`;




export const SensorImagePicker = () => {
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
  
  const popcornArray = [
    "../assets/aldis-popcorn-1.jpg",
    "../assets/aldis-popcorn-2.jpg",
    "../assets/aldis-popcorn-3.jpg",
    "../assets/aldis-popcorn-4.jpg",
  ]
  const [popcorn, setPopcorn] = useState(null);
  useEffect(() => {
    !isShaking(data) && setPopcorn(popcornArray[Math.floor(Math.random()*popcornArray.length)]);
  }, [isShaking(data)]);

  return (
      <ShakeView>
        {isShaking(data) && <ShakeAlert>Pop Pop Pop</ShakeAlert>}
        {popcorn && 
          <Image 
          style={{
            resizeMode: "cover",
            height: 100,
            width: 200
          }}
            source={popcorn}
            />
        }
       
      </ShakeView>
  );
};