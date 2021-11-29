import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Magnetometer } from "expo-sensors";

const Compass = () => {
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });

  const [subscription, setSubscription] = useState(null);

  const slow = () => {
    Magnetometer.setUpdateInterval(1000);
  };

  const fast = () => {
    Magnetometer.setUpdateInterval(300);
  };

  const subscribe = () => {
    setSubscription(
      Magnetometer.addListener((result) => {
        setData(result);
      })
    );
  };

  const unsuscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  useEffect(() => {
    subscribe();
    return () => unsuscribe();
  }, []);

  const { x, y, z } = data;

  const round = (n) => {
    if (!n) {
      return 0;
    }
    return Math.floor(n * 100) / 100;
  };

  return (
    <View>
      <Text>Magnetometer:</Text>
      <Text>
        x: {round(x)} y: {round(y)} z:{round(z)}
      </Text>
      <TouchableOpacity onPress={slow}>
        <Text>Slow</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={fast}>
        <Text>Fast</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Compass;
