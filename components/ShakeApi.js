import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, ActivityIndicator } from "react-native";
import { Accelerometer } from "expo-sensors";
import styled from "styled-components/native";

const ActivityBall = styled.View`
  display: flex;
  background-color: black;
  border-radius: 50%;
  width: 300px;
  height: 300px;
  position: relative;
  align-items: center;
  justify-content: center;
`;

const ActivitySuggestion = styled.Text`
  justify-content: center;
  display: flex;
  padding: 70px 0;
  border: 3px solid green;
  text-align: center;
  align-items: center;
  background-color: white;
  border-radius: 50%;
  color: black;
  width: fit-content;
  block-size: fit-content;
  width: 180px;
  height: 180px;
  position: absolute;
  top: 0;
  left: 0;
`;

// const ActivitySuggestion2 = styled.Text`
// text-align:center
//   align-items: center;
//   background-color: white;
//   color: black;
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
    <ActivityBall>
      <ActivitySuggestion> {activity.activity}</ActivitySuggestion>
      {/* <ActivitySuggestion2>
        {" "}
        Type of activity:{activity.type}
      </ActivitySuggestion2> */}
    </ActivityBall>
  );
};

export default ShakeApi;
