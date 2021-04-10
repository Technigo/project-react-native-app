import React, { useState, useEffect } from 'react';
import { Accelerometer } from 'expo-sensors';
import styled from 'styled-components/native';

import { houseThemes } from '../reusables/houseThemes'; 

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: ${props => props.bgColor ? props.bgColor : 'transparent' };
  display: ${props => props.show ? 'flex' : 'none' };
`;

const QuoteText = styled.Text`
  font-size: 32px;
  font-family: trajanus;
  text-align: center;
  color: ${props => props.color ? props.color : '#ffffff' };
`;

const QuoteCharacter = styled.Text`
  font-size: 18px;
  font-style: italic;
  text-align: center;
  margin-top: 30px;
  color: ${props => props.color ? props.color : '#ffffff' };
`;

const isShaking = (data) => {
  const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);

  return totalForce > 1.78;
};

export const GenerateGotQuote = ({ onFetch, gotQuote }) => {
  Accelerometer.setUpdateInterval(400);

  const [subscription, setSubscription] = useState(null);

  const _subscribe = () => {
    setSubscription(
      Accelerometer.addListener((accelerometerData) => {
        maybeFetchNewQuote(accelerometerData);
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

  let lastGotQuoteFetch = new Date();

  const maybeFetchNewQuote = (accelerometerData) => {
    const functionWasCalledAt = new Date();
    const msSinceLastFetch = functionWasCalledAt - lastGotQuoteFetch;
    if (isShaking(accelerometerData) && msSinceLastFetch > 2000) {
      onFetch();
      lastGotQuoteFetch = functionWasCalledAt;
    }
  };

  return (
    <Container show={!!gotQuote} bgColor={houseThemes[gotQuote?.character?.house?.slug]?.background}>
      <QuoteText color={houseThemes[gotQuote?.character?.house?.slug]?.color}>
        {gotQuote && (`"${gotQuote.sentence}"`)}
      </QuoteText>

      <QuoteCharacter color={houseThemes[gotQuote?.character?.house?.slug]?.color}>
        {gotQuote && (gotQuote.character.name)}
      </QuoteCharacter>
    </Container>
  );
};
