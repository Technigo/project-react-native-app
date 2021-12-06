import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import styled from "styled-components/native";
import { Accelerometer } from "expo-sensors";

const Container = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: pink;
  padding: 10px;
  width: 100%;
  height: 100%;
  text-align: center;
`;

const BoredText = styled.Text`
  font-weight: 800;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 20;
`;

const ShakeText = styled.Text`
  font-weight: 700;
  text-align: center;
  margin-bottom: 10;
`;

const ShakeApi = () => {
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });

  const [bored, setBored] = useState({});
  const [loading, setLoading] = useState(false);
  const [subscription, setSubscription] = useState(null);

  useEffect(() => {
    generateActivity();
  }, []);

  useEffect(() => {
    Accelerometer.setUpdateInterval(1000);
    subscribe();
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (isShakingEnough(data)) {
      generateActivity();
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

  const generateActivity = () => {
    setLoading(true);
    fetch("http://www.boredapi.com/api/activity/")
      .then((res) => res.json())
      .then((data) => setBored(data))
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
    <View>
      <BoredText>
        Having a slow day? Feeling bored? Feel like procrastinating?
      </BoredText>
      <ShakeText>Shake for something to do!</ShakeText>
      <Container>
        <Text>Activity: {bored.activity}</Text>
        <Text>Participants: {bored.participants}</Text>
      </Container>
    </View>
  );
};

export default ShakeApi;
