import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  Vibration,
  TextInput,
} from 'react-native';
import styled from 'styled-components/native';
import { Accelerometer } from 'expo-sensors';

const QuoteText = styled.Text`
  font-weight: 700;
`;

export const MagicBall = () => {
  const [magicAnswer, setMagicAnswer] = useState('');

  const [text, onChangeText] = useState('Useless Text');

  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });

  const answers = ['yes', 'maybe', 'no'];

  const [loading, setLoading] = useState(false);
  const [subscription, setSubscription] = useState(null);

  useEffect((answer) => {
    generateMagicBall(answer);
  }, []);

  useEffect(() => {
    Accelerometer.setUpdateInterval(1000);
    subscribe();
    return () => unsubscribe();
  }, []);

  useEffect(
    (answer) => {
      if (isShakingEnough(data)) {
        generateMagicBall(answer);
      }
    },
    [data]
  );

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

  const generateMagicBall = () => {
    setLoading(true);
    Vibration.vibrate();
    const answer = answers[Math.floor(Math.random() * answers.length)];
    setMagicAnswer(answer);
    console.log(answer);
    setTimeout(() => setLoading(false), 2000);
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
      <TextInput
        // style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder='useless placeholder'
      />
      <QuoteText>Answer: {magicAnswer}</QuoteText>
    </View>
  );
};
