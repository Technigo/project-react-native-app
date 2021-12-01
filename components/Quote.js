import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { View, Image } from 'react-native';
import { Accelerometer } from 'expo-sensors';

export const Quote = () => {
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [friendsQuote, setFriendsQuote] = useState({});
  const [subscription, setSubscription] = useState(null);

  useEffect(() => {
    generateQuote();
  }, []);

  useEffect(() => {
    Accelerometer.setUpdateInterval(500);
    subscribe();
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (isShakingEnough(data)) {
      generateQuote();
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

  const generateQuote = () => {
    fetch('https://friends-quotes-api.herokuapp.com/quotes/random')
      .then((res) => res.json())
      .then((data) => setFriendsQuote(data));
  };

  const isShakingEnough = (data) => {
    const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);

    return totalForce > 2;
  };

  const { x, y, z } = data;

  const monica = require('../assets/monica.jpeg');
  const joey = require('../assets/joey.jpeg');
  const chandler = require('../assets/chandler.jpeg');
  const phoebe = require('../assets/phoebe.jpeg');
  const rachel = require('../assets/jennifer.jpeg');
  const ross = require('../assets/ross.png');
  const friends = require('../assets/friends.jpeg');

  if (friendsQuote.character === 'Joey') {
    return (
      <MainContainer>
        <Image style={{width: 400, height:400}} source={joey} />
        <Title>Shake to f.r.i.e.n.d.s it up!</Title>
        <View>
          <QuoteText>"{friendsQuote.quote}"</QuoteText>
          <QuoteText>- {friendsQuote.character}</QuoteText>
        </View>
      </MainContainer>
    );
  } else if (friendsQuote.character === 'Chandler') {
    return (
      <MainContainer>
        <Image style={{width: 400, height:400}} source={chandler} />
        <Title>Shake to f.r.i.e.n.d.s it up!</Title>
        <View>
          <QuoteText>"{friendsQuote.quote}"</QuoteText>
          <QuoteText>- {friendsQuote.character}</QuoteText>
        </View>
      </MainContainer>
    );
  } else if (friendsQuote.character === 'Phoebe') {
    return (
      <MainContainer>
        <Image style={{width: 400, height:400}} source={phoebe} />
        <Title>Shake to f.r.i.e.n.d.s it up!</Title>
        <View>
          <QuoteText>"{friendsQuote.quote}"</QuoteText>
          <QuoteText>- {friendsQuote.character}</QuoteText>
        </View>
      </MainContainer>
    );
  } else if (friendsQuote.character === 'Ross') {
    return (
      <MainContainer>
        <Image style={{width: 400, height:400}} source={ross} />
        <Title>Shake to f.r.i.e.n.d.s it up!</Title>
        <View>
          <QuoteText>"{friendsQuote.quote}"</QuoteText>
          <QuoteText>- {friendsQuote.character}</QuoteText>
        </View>
      </MainContainer>
    );
  } else if (friendsQuote.character === 'Rachel') {
    return (
      <MainContainer>
        <Image style={{width: 400, height:400}} source={rachel} />
        <Title>Shake to f.r.i.e.n.d.s it up!</Title>
        <View>
          <QuoteText>"{friendsQuote.quote}"</QuoteText>
          <QuoteText>- {friendsQuote.character}</QuoteText>
        </View>
      </MainContainer>
    );
  } else if (friendsQuote.character === 'Monica') {
    return (
      <MainContainer>
        <Image style={{width: 400, height:400}} source={monica} />
        <Title>Shake to f.r.i.e.n.d.s it up!</Title>
        <View>
          <QuoteText>"{friendsQuote.quote}"</QuoteText>
          <QuoteText>- {friendsQuote.character}</QuoteText>
        </View>
      </MainContainer>
    );
  } else {
    return (
      <MainContainer>
        <Image styles={{width: 400, height:400}} source={friends} />
        <Title>Shake to f.r.i.e.n.d.s it up!</Title>
      </MainContainer>
    );
  }
};

const MainContainer = styled.View`
width:100%;
`

const Title = styled.Text`
  font-size: 24px;
  margin-top: 20px;
  text-align:center;
`;

const QuoteText = styled.Text`
  text-align: center;
  margin: 0 auto;
  min-height: 50px;
  margin-top: 20px;
`;
