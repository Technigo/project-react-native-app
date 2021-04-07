import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';


const Container = styled.View`
  flex: 1;
  justify-content: center;
  background-color: black;
`;

const CoinCard = styled.View`
  padding: 40px 20px;
  margin: 20px;
  border: 1px solid white;
`;

const CoinTitle = styled.Text`
  color: white;
  font-size: 26px;
 font-weight: bold;
`;

const CoinText = styled.Text`
  color: white;
  font-size: 20px;
  padding: 3px 0;
`;

const CoinSymbol = styled.Text`
  color: #ffac41;
  font-size: 24px;
  font-weight: bold;
`;

const Button = styled.TouchableOpacity`
  padding: 20px;
  background-color: #ff1e56;
  margin-top: 40px;
`;

const ButtonText = styled.Text`
  font-size: 20px;
  color: black;
  font-weight: bold;
  text-align: center;
`;

export const RandomCoin = () => {
  const [coin, setCoin] = useState([])
  const API_URL = "https://api.coinlore.net/api/tickers/?start=0&limit=20";
    
  useEffect(() => {
    fetchCoin()
  }, [])

  const fetchCoin = () => {
    fetch(API_URL)
    .then(res => res.json())
    .then((json) => {
      const getCoin = json.data[Math.floor(Math.random() * json.data.length)]
      setCoin(getCoin)
  })}

  return (
    <>
      <Container>
        <CoinCard>
          <CoinTitle>{coin.name}</CoinTitle>
          <CoinSymbol>{coin.symbol}</CoinSymbol>
          <CoinText>Price: {coin.price_usd} $</CoinText>
          <CoinText>Change in last hour: {coin.percent_change_1h} %</CoinText>
          <CoinText>Change in last 24 hours: {coin.percent_change_24h} %</CoinText>
          <CoinText>Change in the last week: {coin.percent_change_7d} %</CoinText>
          <Button onPress={fetchCoin}><ButtonText>SHAKE PHONE OR PRESS BUTTON TO GET NEW COIN</ButtonText></Button>
        </CoinCard>
      </Container>
    </>     
  )
}