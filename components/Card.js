import React, { useState, useEffect, useRef } from 'react';

import { Header } from './Header';
import { Wallet, WalletImage, WalletText, Container, CoinCardBig, CoinCardTop, CoinCard, CoinTitle, CoinInfo, CoinSymbol, ButtonContainer, Buy, Sell } from '../styledcomponents/CardStyle';

export const Card = ({ navigation }) => {
  const [coins, setCoins] = useState([]);
  const [buy, setBuy] = useState(100000);
  const stateRef = useRef();
  stateRef.current = buy;

  const COIN_URL = "https://api.coinlore.net/api/tickers/?start=0&limit=30";

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
      <Wallet>
        <WalletImage source={require('../assets/wallet.png')}/>
        <WalletText>{Number.parseFloat(stateRef.current).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} $</WalletText>
      </Wallet>
      <Container>
        {coins.map((coin) => (
          <CoinCardBig key={coin.id}>
            <CoinCardTop>
              <CoinTitle> {coin.name}</CoinTitle>
              <CoinInfo> {coin.price_usd.replace(/\B(?=(\d{3})+(?!\d))/g, ",")} $</CoinInfo>
            </CoinCardTop>
            <CoinCard>
              <CoinSymbol> {coin.symbol}</CoinSymbol>
              <ButtonContainer>
                <Buy disabled={buy < coin.price_usd} onPress={() => setBuy(buy - Number.parseFloat(coin.price_usd))}><CoinInfo>BUY</CoinInfo></Buy>
                <Sell disabled={buy === 100000} onPress={() => setBuy(stateRef.current + Number.parseFloat(coin.price_usd))}><CoinInfo>SELL</CoinInfo></Sell>
              </ButtonContainer>
            </CoinCard>
          </CoinCardBig>
        ))}
      </Container>
    </>
  )
}