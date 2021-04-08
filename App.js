import React, { useEffect, useState } from "react";
import { Accelerometer } from "expo-sensors";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 24px;
  color: palevioletred;
`;

const App = () => {
  const [quote, setQuote] = useState("");
  const [isShaking, setIsShaking] = useState(false);
  const [subscription, setSubscription] = useState(null);

  Accelerometer.setUpdateInterval(400);

  const _subscribe = () => {
    setSubscription(
      Accelerometer.addListener((accelerometerData) => {
        const { x, y, z } = accelerometerData;
        setIsShaking(Math.abs(x) + Math.abs(y) + Math.abs(z) > 1.78);
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

  useEffect(() => {
    async function getRandomQuote() {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      setQuote(`${data.content} —${data.author}`);
    }
    getRandomQuote();
  }, [isShaking]);

  return (
    <Container>
      <Title>{quote}</Title>
    </Container>
  );
};

export default App;
