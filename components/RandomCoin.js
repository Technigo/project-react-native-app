import React, { useState, useEffect } from 'react';
import { Accelerometer } from 'expo-sensors';

import { Container, Loading, RandomCoinTitle, CoinCard, CoinTitle, CoinText, CoinSymbol, Button, ButtonText } from '../styledcomponents/RandomCoinStyle';


const isShaking = (data) => {
    const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);
    return totalForce > 1.72;
  };

export const RandomCoin = () => {
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
  Accelerometer.setUpdateInterval(500);

  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });

  // This keeps track of whether we are listening to the Accelerometer data
  const [subscription, setSubscription] = useState(null);

  const _subscribe = () => {
    // Save the subscription so we can stop using the accelerometer later
    setSubscription(
      // This is what actually starts reading the data
      Accelerometer.addListener((accelerometerData) => {
        // Whenever this function is called, we have received new data
        // The frequency of this function is controlled by setUpdateInterval
        setData(accelerometerData);
      })
    );
  };

  // This will tell the device to stop reading Accelerometer data.
  // If we don't do this our device will become slow and drain a lot of battery
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
  })

  return (
    <Container>
      {isShaking(data) && <Loading>LOADING COIN</Loading>}
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