import React, { useState, useEffect, useRef } from "react";

import { Header } from "./Header";
import { Wallet, WalletImage, WalletText, Container, CoinCardContainer, CoinCardTop, CoinCardBottom, CoinTitle, CoinInfo, CoinSymbol, ButtonContainer, BuyButton, SellButton } from "../styledcomponents/AllCoinsStyles";

export const AllCoins = ({ navigation }) => {
  const [coins, setCoins] = useState([]);
  const [buy, setBuy] = useState(100000);
  const value = useRef();
  value.current = buy;

  const COIN_URL = "https://api.coinlore.net/api/tickers/?start=0&limit=30";

  useEffect(() => {
    setBuy(value.current);
  }, []);

  useEffect(() => {
      fetchCoins();
  }, []);
  
  const fetchCoins = () => {
    fetch(COIN_URL)
    .then(res => res.json())
    .then((json) => {
      setCoins(json.data)
    });
  };

  return (
    <>
      <Header onPress={() => navigation.navigate("ShakeRandomCoin")}></Header>
      <Wallet>
        <WalletImage source={require("../assets/purse.png")}/>
        <WalletText>{Number.parseFloat(value.current).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} $</WalletText>
      </Wallet>
      <Container>
        {coins.map((coin) => (
          <CoinCardContainer key={coin.id}>
            <CoinCardTop>
              <CoinTitle> {coin.name}</CoinTitle>
              <CoinInfo> {coin.price_usd.replace(/\B(?=(\d{3})+(?!\d))/g, ",")} $</CoinInfo>
            </CoinCardTop>
            <CoinCardBottom>
              <CoinSymbol> {coin.symbol}</CoinSymbol>
              <ButtonContainer>
                <BuyButton 
                  disabled={value.current < coin.price_usd} 
                  onPress={() => setBuy(value.current - Number.parseFloat(coin.price_usd))}>
                  <CoinInfo>BUY</CoinInfo>
                </BuyButton>
                <SellButton 
                  disabled={value.current === 100000} 
                  onPress={() => setBuy(value.current + Number.parseFloat(coin.price_usd))}>
                  <CoinInfo>SELL</CoinInfo>
                </SellButton>
              </ButtonContainer>
            </CoinCardBottom>
          </CoinCardContainer>
        ))}
      </Container>
    </>
  )
}