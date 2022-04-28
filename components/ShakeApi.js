import React, { useState, useEffect } from "react";
import { View, Text, SliderComponent, Image } from "react-native"
import styled from "styled-components/native";
import { Accelerometer } from "expo-sensors";

const Container = styled.View`
width: 100%;
height: 75%;
`
const StyledImage = styled.Image`
  border-radius: 20px;
`



const ShakeApi = () => {

    const [images, setImages] = useState({})




const generateImage = () => {
        fetch("https://randomfox.ca/floof/")
        .then(res => res.json())
        .then(data => setImages(data))      
}

useEffect(() => {
    generateImage()
}, [])

const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [subscription, setSubscription] = useState(null);

  // const _slow = () => {
  //   Accelerometer.setUpdateInterval(1000);
  // };

  // const _fast = () => {
  //   Accelerometer.setUpdateInterval(16);
  // };
  const { x, y, z } = data;

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
    const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z)
    return totalForce > 1.78
}

  useEffect(() => {
    if(isShaking(data)){
        generateImage()
    }
}, [data])

 
  return (  
  <Container>
      
      <StyledImage 
      style={{width: '100%', height: '100%'}}
      source={{ uri: `${images.image}` }}></StyledImage>

  </Container>

  );
}

export default ShakeApi

