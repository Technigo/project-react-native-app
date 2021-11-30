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

export const MagicBall = () => {
  const [magicAnswer, setMagicAnswer] = useState('');
  const [question, setQuestion] = useState('');
  const [loading, setLoading] = useState(false);
  const [subscription, setSubscription] = useState(null);

  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });

  const answers = ['yes', 'maybe', 'no'];

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
    const answer = answers[Math.floor(Math.random() * answers.length)];
    setMagicAnswer(answer);
    console.log(answer);
    Vibration.vibrate();
    setTimeout(() => setLoading(false), 1000);
    setQuestion('');
  };

  // const onQuestionChange = (event) => {
  //   setQuestion(event.target.value);
  // };

  const isShakingEnough = (data) => {
    const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);
    return totalForce > 1.78;
  };

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <MagicBallContainer>
      <InputField
        // style={styles.input}
        // onChangeText={onQuestionChange}
        // value={question}
        placeholder='Your question to the magic ball'
      />
      <StyledBall>
        <MagicText>Answer: {magicAnswer}</MagicText>
      </StyledBall>
    </MagicBallContainer>
  );
};

const MagicBallContainer = styled.View`
  background-color: antiquewhite;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const InputField = styled.TextInput`
  height: 50px;
  width: 75%;
  border: 2px solid #000;
  margin: 10px;
  padding: 5px;
`;

const StyledBall = styled.View`
  height: 300px;
  width: 300px;
  background-color: #000;
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 150px;
`;

const MagicText = styled.Text`
  font-weight: 700;
  font-size: 30px;
  border: 1px solid #000;
  width: 50%;
  padding: 5px;
  z-index: 1;
  background-color: aliceblue;
`;
