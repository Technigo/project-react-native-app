import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, ActivityIndicator } from "react-native";
import { Accelerometer } from "expo-sensors";
import styled from "styled-components/native";

// const ApiButton = styled.TouchableOpacity`
//   width: 50%;
//   background-color: green;
// `;

const ShakeApi = () => {
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [subscription, setSubscription] = useState(null);
  const [activity, setActivity] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    generateActivity();
  }, []);

  useEffect(() => {
    Accelerometer.setUpdateInterval(1000);
    subscribe();
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (isShaking(data)) {
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
    setLoading();
    fetch("https://www.boredapi.com/api/activity/")
      .then((res) => res.json())
      .then((data) => setActivity(data))
      .finally(() => setLoading(false));
  };

  const isShaking = (data) => {
    const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);
    return totalForce > 1.78;
  };

  if (loading) {
    return <ActivityIndicator />;
  }

  const { x, y, z } = data;

  return (
    <View>
      <Text> Activity:{activity.activity}</Text>
      <Text> Type of activity:{activity.type}</Text>
    </View>
  );
};

export default ShakeApi;
