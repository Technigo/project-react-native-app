import React, { useState, useEffect } from "react";
import { View, Text } from 'react-native';
import { Accelerometer } from "expo-sensors";
import styled from "styled-components/native";

export const SensorComponent = () => {

  // Accelerometer.setUpdateInterval(400);

  const [quote, setQuote] = useState({})

  const generateQuote = () => {
    fetch("https://api.quotable.io/random")
      .then(response => response.json())
      .then(data => setQuote(data))
  }

  useEffect(()=> {
    generateQuote();
  }, []);
  
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  
  const [subscription, setSubscription] = useState(null);

  const { x, y, z} = data;
  
  const subscribe = () => {
    setSubscription(
      Accelerometer.addListener((accelerometerData) => {
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
  };

  useEffect(()=> {
    if (isShaking(data)) {
        generateQuote();
    }
  }, [data])

    return (
      <View>
        {isShaking(data) && <ShakeAlert>Shaking</ShakeAlert>}
        <View>
          <ShakeDataTitle>Shake Data</ShakeDataTitle>
          <Text>X: {data.x.toFixed(2)}</Text>
          <Text>Y: {data.y.toFixed(2)}</Text>
          <Text>Z: {data.z.toFixed(2)}</Text>
          <Text>{quote.content}</Text>
          <Text>{quote.author}</Text>
        </View>
    </View>
  );
};


// = Styled components
const ShakeView = styled.View`
  display: flex;
  flex-direction: column;
`;

const ShakeAlert = styled.Text`
  font-size: 36px;
  font-weight: bold;
  color: #aa0000;
`;
const ShakeDataView = styled.View``;
const ShakeDataTitle = styled.Text`
  font-weight: bold;
`;
const ShakeData = styled.Text``;
