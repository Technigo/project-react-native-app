import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components/native';

import { Header } from './Header';

const Wallet = styled.View`
    padding: 0 0 10px 12px;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #ffac41;
`;

const WalletImage = styled.Image`
    margin-right: 7px;
    width: 32px;
    height: 32px;
`;

const WalletText = styled.Text`
    font-size: 16px;
    color: black;
    font-weight: bold;
`;

const Container = styled.ScrollView`
  flex: 1;
  background-color: #ffac41;
`;

const CoinCardBig = styled.View`
  display: flex;
  justify-content: space-between;
  background-color: black;
  border: 1px solid white;
  padding: 3px;
  margin: 5px;
`;

const CoinCardTop = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 4px;
`;

const CoinCard = styled.View`
  padding: 0 4px 4px 4px;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
`;

const CoinTitle = styled.Text`
  color: white;
  font-size: 16px;
`;

const CoinInfo = styled.Text`
  color: white;
  font-size: 15px;
`;

const CoinSymbol = styled.Text`
 color: #ffac41;
 font-size: 18px;
 font-weight: bold;
`;

const ButtonContainer = styled.View`
  display: flex;
  flex-direction: row;
`;

const Buy = styled.TouchableOpacity`
  padding: 2px 5px;
  background-color: #ff1e56;
  border-radius: 2px;
  ${props =>
    props.disabled ?
    `
    opacity: 0.3;
    `:  `
    opacity: 1;
    `};
`;

const Sell = styled.TouchableOpacity`
  padding: 2px 5px;
  background-color: #ff1e56;
  border-radius: 2px;
  margin-left: 7px;
  ${props =>
    props.disabled ?
    `
    opacity: 0.3;
    `:  `
    opacity: 1;
    `};
`;


export const Card = ({ navigation }) => {
  const [coins, setCoins] = useState([]);
  const [buy, setBuy] = useState(100000);
  const stateRef = useRef();
  stateRef.current = buy;

  const COIN_URL = "https://api.coinlore.net/api/tickers/?start=0&limit=20";

  useEffect(() => {
      setBuy(stateRef.current);
  }, [])

  useEffect(() => {
    fetch(COIN_URL)
    .then(res => res.json())
    .then((json) => {
        setCoins(json.data)
        console.log(json.data[0])
    })
  }, [])

  return (
      <>
      <Header onPress={() => navigation.navigate("RandomCoin")}></Header>
      
      <Wallet><WalletImage source={require('../assets/wallet.png')}/><WalletText>{stateRef.current.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} $</WalletText></Wallet>
      <Container>
      {coins.map((coin) => (
        <CoinCardBig key={coin.id}>
        <CoinCardTop>
          <CoinTitle> {coin.name}</CoinTitle>
          <CoinInfo> {coin.price_usd} $</CoinInfo>
        </CoinCardTop>
        <CoinCard>
          <CoinSymbol> {coin.symbol}</CoinSymbol>
          <ButtonContainer>
          <Buy disabled={stateRef.current < coin.price_usd} onPress={() => setBuy(stateRef.current - coin.price_usd)}><CoinInfo>BUY</CoinInfo></Buy>
          <Sell disabled={stateRef.current === 100000} onPress={() => setBuy(stateRef.current)}><CoinInfo>SELL</CoinInfo></Sell>
          </ButtonContainer>
        </CoinCard>
        </CoinCardBig>
      ))}
    </Container>
    </>
  )
}