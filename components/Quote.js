import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { Image, ActivityIndicator } from 'react-native';
import { Accelerometer } from 'expo-sensors';

export const Quote = () => {
    // setting movement to 0
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [friendsQuote, setFriendsQuote] = useState({}); // empty object with no quote
  const [subscription, setSubscription] = useState(null); // for the accelerator
  const [loading, setLoading] = useState(false); // sets loading to false

  useEffect(() => { // generates a quote
    generateQuote();
  }, []);

  useEffect(() => {
    Accelerometer.setUpdateInterval(500);
    subscribe();
    return () => unsubscribe();
  }, []);

  useEffect(() => { // determines if the shaking is enough to update the quote
    if (isShakingEnough(data)) {
      generateQuote();
    }
  }, [data]);

  const subscribe = () => { // a listener that listens for a shake
    setSubscription(
      Accelerometer.addListener((accelerometerData) => {
        setData(accelerometerData);
      })
    );
  };

  const unsubscribe = () => { // if there is no shake nothing happens
    subscription && subscription.remove();
    setSubscription(null);
  };

  const generateQuote = () => { // fetches the quote from the API
    setLoading(true);
    fetch('https://friends-quotes-api.herokuapp.com/quotes/random')
      .then((res) => res.json())
      .then((data) => setFriendsQuote(data))
      .finally(() => setLoading(false));
  };

  const isShakingEnough = (data) => { // does a mathematical calculation to see if the shaking is big enough
    const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);

    return totalForce > 2;
  };

  const { x, y, z } = data;

  // fetching the images from my assets folder and sets them to variables
  const monica = require('../assets/monica.jpeg');
  const joey = require('../assets/joey.jpeg');
  const chandler = require('../assets/chandler.jpeg');
  const phoebe = require('../assets/phoebe.jpeg');
  const rachel = require('../assets/jennifer.jpeg');
  const ross = require('../assets/ross.png');
  const friends = require('../assets/friends.jpeg');

  if (loading) {
      return <ActivityIndicator /> // if loading is true this shows
  }

  // conditional rendering that varies depending on which character is saying the quote
  if (friendsQuote.character === 'Joey') {
    return (
      <MainContainer>
        <Image style={{ width: 400, height: 400 }} source={joey} />
        <QuoteContainer>
          <QuoteText>"{friendsQuote.quote}"</QuoteText>
          <Character>- {friendsQuote.character}</Character>
        </QuoteContainer>
        <Title>Shake me again!</Title>
      </MainContainer>
    );
  } else if (friendsQuote.character === 'Chandler') {
    return (
      <MainContainer>
        <Image style={{ width: 400, height: 400 }} source={chandler} />
        <QuoteContainer>
          <QuoteText>"{friendsQuote.quote}"</QuoteText>
          <Character>- {friendsQuote.character}</Character>
        </QuoteContainer>
        <Title>Shake me again!</Title>
      </MainContainer>
    );
  } else if (friendsQuote.character === 'Phoebe') {
    return (
      <MainContainer>
        <Image style={{ width: 400, height: 400 }} source={phoebe} />
        <QuoteContainer>
          <QuoteText>"{friendsQuote.quote}"</QuoteText>
          <Character>- {friendsQuote.character}</Character>
        </QuoteContainer>
        <Title>Shake me again!</Title>
      </MainContainer>
    );
  } else if (friendsQuote.character === 'Ross') {
    return (
      <MainContainer>
        <Image style={{ width: 400, height: 400 }} source={ross} />
        <QuoteContainer>
          <QuoteText>"{friendsQuote.quote}"</QuoteText>
          <Character>- {friendsQuote.character}</Character>
        </QuoteContainer>
        <Title>Shake me again!</Title>
      </MainContainer>
    );
  } else if (friendsQuote.character === 'Rachel') {
    return (
      <MainContainer>
        <Image style={{ width: 400, height: 400 }} source={rachel} />
        <QuoteContainer>
          <QuoteText>"{friendsQuote.quote}"</QuoteText>
          <Character>- {friendsQuote.character}</Character>
        </QuoteContainer>
        <Title>Shake me again!</Title>
      </MainContainer>
    );
  } else if (friendsQuote.character === 'Monica') {
    return (
      <MainContainer>
        <Image style={{ width: 400, height: 400 }} source={monica} />
        <QuoteContainer>
          <QuoteText>"{friendsQuote.quote}"</QuoteText>
          <Character>- {friendsQuote.character}</Character>
        </QuoteContainer>
        <Title>Shake me again!</Title>
      </MainContainer>
    );
  } else {
    return (
      <MainContainer>
        <Image styles={{ width: 400, height: 400 }} source={friends} />
        <Title>Shake me!</Title>
      </MainContainer>
    );
  }
};

// my styled components
const MainContainer = styled.View`
  width: 100%;
`;

const Title = styled.Text`
  font-size: 24px;
  margin-top: 20px;
  text-align: center;
  font-weight: 700;
`;

const QuoteText = styled.Text`
  text-align: center;
  margin: 0 auto;
  min-height: 40px;
  margin: 10px 20px;
`;

const Character = styled.Text`
  font-size: 12px;
  font-style: italic;
`;

const QuoteContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
