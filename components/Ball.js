import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";
import { Accelerometer } from "expo-sensors";

const BallContainer = styled.View`
  height: 300px;
  width: 300px;
  align-items: center;
  margin: 100px;
  background-color: black;
  justify-content: center;
  border-radius: 500px;
`;

const Content = styled.View`
  width: 55%;
  height: 55%;
  background-color: white;
  border-radius: 500px;
  align-items: center;
  justify-content: center;
`;
const Answer = styled.Text`
  font-size: 12px;
  margin: 5px;
  color: black;
`;

const Number = styled.Text`
  font-size: 70px;
`;

const Ball = () => {
  const [subscription, setSubscription] = useState(null);
  const [answer, setAnswer] = useState({});
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });

  useEffect(() => {
    generateAnswer();
  }, []);

  useEffect(() => {
    Accelerometer.setUpdateInterval(3000);
    subscribe();
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (isShakingEnough(data)) {
      generateAnswer();
    }
  }, [data]);

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

  const generateAnswer = () => {
    fetch("https://api.kanye.rest")
      .then((res) => res.json())
      .then((answer) => setAnswer(answer));
  };

  const isShakingEnough = (data) => {
    const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);
    return totalForce > 1.35;
  };

  const { x, y, z } = data;
  return (
    <View>
      <BallContainer>
        <Content>
          <Answer>
            {isShakingEnough(data) ? answer.quote : <Number>8</Number>}
          </Answer>
        </Content>
      </BallContainer>
    </View>
  );
};

export default Ball;
