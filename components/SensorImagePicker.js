import React, { useState, useEffect } from 'react';
import { Accelerometer } from 'expo-sensors';
import styled from 'styled-components/native';
import { Image, Vibration } from 'react-native';

const isShaking = (data) => {
  const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);

  return totalForce > 1.78;
};

const ShakeView = styled.View`
  flex: 8;
  justify-content: center;
  align-items: center;
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

    const vibrateDevice = () => {
    Vibration.vibrate();
  }

  
const popcornArray = [
    require("../assets/aldis-popcorn-1.jpg"),
    require("../assets/aldis-popcorn-2.jpg"),
    require("../assets/aldis-popcorn-3.jpg"),
    require("../assets/aldis-popcorn-4.jpg"),
    require("../assets/aldis-popcorn-5.jpg"),
    require("../assets/aldis-popcorn-6.jpg"),
    require("../assets/aldis-popcorn-7.jpg"),
    require("../assets/aldis-popcorn-8.jpg"),
    require("../assets/aldis-popcorn-9.jpg"),
    require("../assets/aldis-popcorn-10.jpg"),
    require("../assets/aldis-popcorn-11.jpg"),
  ]
  const [popcorn, setPopcorn] = useState(null);
  useEffect(() => {
    !isShaking(data) && setPopcorn(popcornArray[Math.floor(Math.random()*popcornArray.length)]);
    vibrateDevice();
  }, [isShaking(data)]);

  return (
    <>
    <ShakeView> 
      {popcorn && 
          <Image 
          style={{
            resizeMode: "contain",
            height: 300,
            width: 370,
          }}
            source={popcorn}
            />
        }
        </ShakeView>
      </>
  );
};