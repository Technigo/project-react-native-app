import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import styled from 'styled-components';
import { Accelerometer } from 'expo-sensors';
import { useFonts, Caveat_400Regular } from '@expo-google-fonts/caveat';

const Container = styled.View`
  flex: 1;
  background-color: rgb(219, 218, 213);
  justify-content: center;
  align-items: flex-start;
`;

const QuoteWrapper = styled.View`
  background-color: rgb(178, 184, 180);
  margin-bottom: 10px;
  border-radius: 10;
  margin-left: auto;
  margin-right: auto;
`;

const QuoteText = styled.Text`
  font-size: 30px;
  margin: 10px;
`;

const QuoteCharacter = styled.Text`
  font-size: 25px;
  margin: 10px;
`;

const NextQuote = styled.TouchableOpacity`
  height: 60px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 20px;
  background-color: rgb(255, 199, 223);
`;

const ButtonText = styled.Text`
  font-size: 25px;
  padding: 13px;
`;

const ShakeText = styled.Text`
  font-size: 25px;
  padding: 13px;
  margin-right: auto;
  margin-left: auto;
  width: 150px;
`;

const ShakeApi = () => {
  let [fontsLoaded] = useFonts({
    Caveat_400Regular,
  });
  const [quote, setQuote] = useState({});

  const generateQuote = () => {
    fetch('https://friends-quotes-api.herokuapp.com/quotes/random')
      .then((response) => response.json())
      .then((data) => setQuote(data));
  };

  useEffect(() => {
    generateQuote();
  }, []);

  //////////////////////////

  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [subscription, setSubscription] = useState(null);

  //   const _slow = () => {
  //     Accelerometer.setUpdateInterval(1000);
  //   };

  //   const _fast = () => {
  //     Accelerometer.setUpdateInterval(16);
  //   };
  const { x, y, z } = data;

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

  useEffect(() => {
    subscribe();

    return () => unsubscribe();
  }, []);

  const isShaking = (data) => {
    const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);
    return totalForce > 1.78;
  };

  useEffect(() => {
    if (isShaking(data)) {
      generateQuote();
    }
  }, [data]);

  return (
    <Container>
      <QuoteWrapper>
        <QuoteText style={{ fontFamily: 'Caveat_400Regular' }}>
          {quote.quote}
        </QuoteText>
        <QuoteCharacter style={{ fontFamily: 'Caveat_400Regular' }}>
          - {quote.character}
        </QuoteCharacter>
      </QuoteWrapper>
      <NextQuote onPress={generateQuote}>
        <ButtonText style={{ fontFamily: 'Caveat_400Regular' }}>
          Give me a new quote..
        </ButtonText>
      </NextQuote>
      <ShakeText style={{ fontFamily: 'Caveat_400Regular' }}>
        Or just shake your phone!
      </ShakeText>
    </Container>
  );
};
export default ShakeApi;
