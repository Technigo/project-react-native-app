import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';
import { Accelerometer } from 'expo-sensors';

const QuoteText = styled.Text`
  font-weight: 700;
`;

export const ShakeApi = () => {
  const [activity, setActivity] = useState({});
  const [loading, setLoading] = useState(false);
  const [subscription, setSubscription] = useState(null); // the communication we have between the sensor and our code, makes sure the sensor get constant information about the position of the phone
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });

  useEffect(() => {
    generateActivity();
  }, []);

  // when the component gets mounted (as soon as it's used), we're gonna subscribe to the change of position
  useEffect(() => {
    Accelerometer.setUpdateInterval(1000);
    subscribe();
    return () => unsubscribe(); // when we unmount, we tell it to NOT subscribe anymore
  }, []);

  // this useEffect will show the quote IF the shake is hard enough
  useEffect(() => {
    if (isShakingEnough(data)) {
      generateQuote();
    }
  }, [data]);

  // this tells the phone to keep the sensor updated about the positions
  const subscribe = () => {
    setSubscription(
      Accelerometer.addListener(accelerometerData => {
        setData(accelerometerData);
      })
    );
  };

  // this tells the phone NOT to keep the sensors updated about the positions
  const unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  const generateActivity = () => {
    setLoading(true);
    fetch('https://www.boredapi.com/api/activity')
      .then(response => response.json())
      .then(json => setActivity(json))
      .finally(setLoading(false));
  };

  const isShakingEnough = data => {
    // x,y,z CAN be negative, force is directional
    // We take the absolute value and add them together
    // This gives us the total combined force on the device
    const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);

    // If this force exceeds some threshold, return true, otherwise false
    // Increase this threshold if you need your user to shake harder
    return totalForce > 1.78;
  };

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <View>
      <QuoteText>Activity: {activity.activity}</QuoteText>
      <Text>Type: {activity.type}</Text>
    </View>
  );
};
