import React, { useState, useEffect } from 'react';
import { Accelerometer } from 'expo-sensors';
import { ActivityIndicator } from 'react-native';

import { Container, Loading, RandomCoinTitle, CoinCard, CoinTitle, CoinText, CoinSymbol, Button, ButtonText } from '../styledcomponents/ShakeRandomCoinStyles';


const isShaking = (data) => {
  const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);
  return totalForce > 1.72;
};

export const ShakeRandomCoin = () => {
  const [coin, setCoin] = useState([]);
  const API_URL = "https://api.coinlore.net/api/tickers/?start=0&limit=30";
    
  // First loading page
  useEffect(() => {
    fetchCoin();
  }, [])

  // Fetch that takes random coin from API
  const fetchCoin = () => {
    fetch(API_URL)
    .then(res => res.json())
    .then((json) => {
      const getCoin = json.data[Math.floor(Math.random() * json.data.length)];
      setCoin(getCoin);
  })}

  // Functions and states for shaking sensor
  Accelerometer.setUpdateInterval(800);

  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });

  const [subscription, setSubscription] = useState(null);

  const _subscribe = () => {
    setSubscription(
      Accelerometer.addListener((accelerometerData) => {
        setData(accelerometerData);
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

  useEffect(() => {
    if (isShaking(data)) {
      fetchCoin();
    } 
  }, [data])

  return (
    <Container>
      {isShaking(data) && <><Loading>LOADING COIN</Loading><ActivityIndicator size="large" color="#ff1e56"/></>}
      {!isShaking(data) &&
        <>
          <RandomCoinTitle>RANDOM COIN</RandomCoinTitle>
          <CoinCard>
            <CoinTitle>{coin.name}</CoinTitle>
            <CoinSymbol>{coin.symbol}</CoinSymbol>
            <CoinText>Price: {coin.price_usd} $</CoinText>
            <CoinText>Change in last hour: {coin.percent_change_1h} %</CoinText>
            <CoinText>Change in last 24 hours: {coin.percent_change_24h} %</CoinText>
            <CoinText>Change in the last week: {coin.percent_change_7d} %</CoinText>
            <Button onPress={fetchCoin}>
              <ButtonText>SHAKE PHONE OR CLICK HERE TO GET NEW COIN</ButtonText>
            </Button>
          </CoinCard>
        </> 
      }
    </Container>  
  )
}