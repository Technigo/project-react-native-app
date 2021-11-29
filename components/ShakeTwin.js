import React, { useState, useEffect } from "react";
import { Text, ActivityIndicator } from "react-native";
import { Accelerometer } from "expo-sensors";

export const ShakeTwin = () => {
  const [word, setWord] = useState({});
  const [loading, setLoading] = useState(false);
  const [subscription, setSubscription] = useState(null);
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });

  useEffect(() => {
    generateWord();
  }, []);

  useEffect(() => {
    Accelerometer.setUpdateInterval(1000);
    subscribe();
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (isShaking(data)) {
      generateWord();
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
  const isShaking = (data) => {
    const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);
    return totalForce > 1.78;
  };

  if (loading) return <ActivityIndicator />;

  const generateWord = () => {
    setLoading(true);
    fetch("http://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => setWord(data))
      .finally(() => setLoading(false));
  };

  return (
    <>
      <Text>Shake {word.author}</Text>
    </>
  );
};
