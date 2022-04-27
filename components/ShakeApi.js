import React, { useState, useEffect } from "react";
import { View, Text, SliderComponent, Image } from "react-native"
import styled from "styled-components/native";
import { Accelerometer } from "expo-sensors";


const ShakeApi = () => {

const [advices, setAdvices] = useState({})

const generateAdvice = () => {
        fetch("https://randomfox.ca/floof/")
        .then(res => res.json())
        .then(data => setAdvices(data))      
}

const Container = styled.View`
width: 100%;
height: 100%;
`

useEffect(() => {
    generateAdvice()
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

 


  //////////////////////

  const isShaking = (data) => {
    const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z)
    return totalForce > 1.78
}

  useEffect(() => {
    if(isShaking(data)){
        generateAdvice()
    }
}, [data])

 
  return (
    <Container>
    {/* <Text>
        {data.x}
    </Text>
    <Text>
        {data.y}
    </Text>
    <Text>
        {data.z}
    </Text> */}

              
    <Image 
    style={{width: '100%', height: '100%'}}
    source={{ uri: `${advices.image}` }} />
    
      {/* {advices.content} | {advices.author} */}
      

    

</Container>
  );
}

export default ShakeApi

