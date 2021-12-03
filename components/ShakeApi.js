import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator, Image } from "react-native";
import styled from "styled-components/native";
import { Accelerometer } from "expo-sensors";

const Section = styled.View`
  height: 100%;
  background-color: black;
  align-items: center;
`;

const Header = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20vh;
  margin: 0;
`;

const Title = styled.Text`
  font-size: 30px;
  color: white;
  margin-bottom: 30px;
`;

const FoxImage = styled.Image`
  height: 350px;
  width: 100%;
`;

const ShakeText = styled.Text`
  font-size: 24px;
  color: white;
  text-align: center;
  margin: 20px;
`;

const ShakeApi = () => {
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [fox, setFox] = useState({});
  const [loading, setLoading] = useState(false);
  const [subscription, setSubscription] = useState(null);

  useEffect(() => {
    generateFox();
  }, []);

  useEffect(() => {
    Accelerometer.setUpdateInterval(1000);
    subscribe();
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (isShakingEnough(data)) {
      generateFox();
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

  const generateFox = () => {
    setLoading(true);
    fetch("https://randomfox.ca/floof")
      .then((res) => res.json())
      .then((data) => setFox(data))
      .finally(() => setLoading(false));
  };

  const isShakingEnough = (data) => {
    const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);
    return totalForce > 1.78;
  };

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <>
      <Header>
        <Title>🦊 Fox Generator 🦊</Title>
      </Header>
      <FoxImage source={{ uri: `${fox.image}` }} />
      <ShakeText>Shake to get a new random fox!</ShakeText>
    </>
  );
};

export default ShakeApi;
