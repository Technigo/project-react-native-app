import React, { useState, useEffect } from 'react';
import { Accelerometer } from 'expo-sensors';
import styled from 'styled-components/native';

// ==========================
// = Styled components
const ShakeView = styled.View`
  display: flex;
  flex-direction: column;
`;

const ShakeAlert = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: red;
`;
const ShakeDataView = styled.View`
  flex: 1;
`;
const ShakeDataTitle = styled.Text`
  font-weight: bold;
`;
const ShakeData = styled.Text``;

const ShakeTitle = styled.Text`
  font-size: 40px;
  font-weight: bold;
  color: #aa0000;
  flex: 1;
`

const ScoreCounter = styled.Text `
  font-size: 20px;
  font-weight: bold;
  color: #aa0000;
  flex: 1;
`

export const SensorComponent = () => {

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

  const currentForce = Math.abs(data.x.toFixed(2)) + Math.abs(data.y.toFixed(2)) + Math.abs(data.z.toFixed(2));

  const isShakingSlow = (data) => {
    const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);
    return totalForce > 1.30;
  };
  
  const isShakingMedium = (data) => {
    const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);
    return totalForce > 1.40; //Remember to change this!
  };
  
  const isShakingHard = (data) => {
    const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);
    return totalForce > 1.50; //Remember to change this!
  };

  const [score, setScore] = useState(0)

  const currentScore = () => {
    if (currentForce >1.3) //Change this!
        setScore(score + 1 ) }

  useEffect (() => {
    currentScore()
  }, [currentForce])

  return (
    <ShakeView>
      <ShakeTitle>Start shaking!</ShakeTitle>
      <ShakeDataView>
        <ShakeDataTitle>Current shake force</ShakeDataTitle>
        <ShakeData> {currentForce} </ShakeData>
        {isShakingSlow(data) && <ShakeAlert>Shake harder!</ShakeAlert>}
        {isShakingMedium(data) && <ShakeAlert>Harder!</ShakeAlert>}
        {isShakingHard(data) && <ShakeAlert>There you go!</ShakeAlert>}
      </ShakeDataView>
      <ScoreCounter>Score: {score}</ScoreCounter>
    </ShakeView>
  );
};