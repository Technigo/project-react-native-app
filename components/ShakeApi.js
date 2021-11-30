import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, ActivityIndicator } from "react-native";
import { Accelerometer } from 'expo-sensors';
import styled from "styled-components/native";

const QuoteText = styled.Text`
  font-weight: 700;
`;

const ApiButton = styled.TouchableOpacity`
  width: 50%;
  background-color: green;
`;

const ButtonApi = () => {
  const [activity, setActivity] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    generateActivity();
  }, []);







export default function App() {
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [subscription, setSubscription] = useState(null);

  const _slow = () => {
    Accelerometer.setUpdateInterval(1000);
  };

  const _fast = () => {
    Accelerometer.setUpdateInterval(16);
  };

  const _subscribe = () => {
    setSubscription(
      Accelerometer.addListener(accelerometerData => {
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



  const generateActivity = () => {
    setLoading();
    fetch("https://www.boredapi.com/api/activity/")
      .then((res) => res.json())
      .then((data) => setActivity(data))
      .finally(() => setLoading(false));
  };

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <View>
      <ApiButton onPress={generateActivity}>
        <Text>Click on the button! </Text>{" "}
      </ApiButton>
      <Text> Activity:{activity.activity}</Text>
      <Text> Type of activity:{activity.type}</Text>
    </View>
  );
};

export default ButtonApi;