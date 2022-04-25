import React, { useState, useEffect } from "react";
import { View, Text } from "react-native"
import styled from "styled-components/native";
import { Accelerometer } from "expo-sensors";


const ShakeApi = () => {

const [quote, setQuote] = useState({})

const generateQuote = () => {
        fetch("https://api.quotable.io/random")
        .then(res => res.json())
        .then(data => setQuote(data))
}

const APIButton = styled.Button`
    font-weight: 700;
    background-color: blue;
    width: 50;
`

useEffect(() => {
    generateQuote()
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
        generateQuote()
    }
}, [data])

 

  return (
    <View>
    {/* <Text>
        {data.x}
    </Text>
    <Text>
        {data.y}
    </Text>
    <Text>
        {data.z}
    </Text> */}

    <Text>{quote.content}</Text>
    <Text>{quote.author}</Text>

</View>
  );
}

export default ShakeApi

