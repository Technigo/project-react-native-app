import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { Accelerometer } from 'expo-sensors';
import styled from 'styled-components/native';

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
    _subscribe();
    return () => _unsubscribe(); // when we unmount, we tell it to NOT subscribe anymore
  }, []);

  // this useEffect will show the quote IF the shake is hard enough
  useEffect(() => {
    if (isShakingEnough(data)) {
      generateActivity();
    }
  }, [data]);

  const isShakingEnough = data => {
    // x,y,z CAN be negative, force is directional
    // We take the absolute value and add them together
    // This gives us the total combined force on the device
    const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);

    // If this force exceeds some threshold, return true, otherwise false
    // Increase this threshold if you need your user to shake harder
    return totalForce > 1.78;
  };

  const generateActivity = () => {
    setLoading(true);
    fetch('https://www.boredapi.com/api/activity')
      .then(response => response.json())
      .then(json => setActivity(json))
      .finally(setLoading(false));
  };

  if (loading) {
    <ActivityIndicator />;
  }
  // shows the original position of the phone

  // this code is responsible to tell the accelerometer how often it should check that the position is updated (slow and fast)
  //   const _slow = () => {
  //     Accelerometer.setUpdateInterval(1000);
  //   };

  //   const _fast = () => {
  //     Accelerometer.setUpdateInterval(16);
  //   };

  // this tells the phone to keep the sensor updated about the positions
  const _subscribe = () => {
    Accelerometer.setUpdateInterval(1000);

    setSubscription(
      Accelerometer.addListener(accelerometerData => {
        setData(accelerometerData);
      })
    );
  };

  // this tells the phone NOT to keep the sensos updated about the positions
  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  const { x, y, z } = data;

  return (
    <View>
      <QuoteText>Activity: {activity.activity}</QuoteText>
      <Text>Type: {activity.type}</Text>
    </View>
  );
};
