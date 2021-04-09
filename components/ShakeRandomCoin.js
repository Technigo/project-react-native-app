import React, { useState, useEffect } from "react";
import { Accelerometer } from "expo-sensors";
import { ActivityIndicator, Vibration } from "react-native";

import { Container, Loading, RandomCoinTitle, CoinCard, CoinTitle, CoinText, CoinChange, CoinSymbol, Button, ButtonText } from '../styledcomponents/ShakeRandomCoinStyles';


const isShaking = (data) => {
  const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);
  return totalForce > 1.80;
};

export const ShakeRandomCoin = () => {
  const [coin, setCoin] = useState([]);
  const API_URL = "https://api.coinlore.net/api/tickers/?start=0&limit=30";
    
  // First loading page
  useEffect(() => {
    fetchCoin();
  }, []);

  // Fetch that takes random coin from API
  const fetchCoin = () => {
    fetch(API_URL)
    .then(res => res.json())
    .then((json) => {
      const getCoin = json.data[Math.floor(Math.random() * json.data.length)];
      setCoin(getCoin);
    });
  };

  // States and for shaking sensor
  Accelerometer.setUpdateInterval(800);
  const [subscription, setSubscription] = useState(null);
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });

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
      Vibration.vibrate();
      fetchCoin();
    } 
  }, [data]);

  return (
    <Container>
      {isShaking(data) ? 
        <>
          <Loading>LOADING COIN</Loading><ActivityIndicator size="large" color="#ff1e56"/>
        </>
      :
        <>
          <RandomCoinTitle>RANDOM COIN</RandomCoinTitle>
          <CoinCard>
            <CoinTitle>{coin.name}</CoinTitle>
            <CoinSymbol>{coin.symbol}</CoinSymbol>
            <CoinText>Price: {coin.price_usd} $</CoinText>
            <CoinText>Change in last hour: 
              <CoinChange percent={coin.percent_change_1h < 0}> {coin.percent_change_1h} %</CoinChange>
            </CoinText>
            <CoinText>Change in last 24 hours: 
              <CoinChange percent={coin.percent_change_24h < 0}> {coin.percent_change_24h} %</CoinChange>
            </CoinText>
            <CoinText>Change in the last week: 
              <CoinChange percent={coin.percent_change_7d < 0}> {coin.percent_change_7d} %</CoinChange>
            </CoinText>
            <Button onPress={() => { 
              fetchCoin();
              Vibration.vibrate();}}>
              <ButtonText>SHAKE PHONE OR CLICK HERE TO GET NEW COIN</ButtonText>
            </Button>
          </CoinCard>
        </> 
      }
    </Container>  
  );
};