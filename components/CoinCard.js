import React from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux'
import styled from 'styled-components/native'
import { cart } from '../reducers/cart'
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const CoinCard = ({ coin }) => {

  const dispatch = useDispatch()

  const onButtonClick = (product) => {
    dispatch(cart.actions.addItem(product))
  }

  return (
    <>
      <CoinsList key={coin.id}>
        <BackgroundColor colors={['rgba(240,86,12,1)', 'rgba(255,229,0,1)']}>
          <ContainerLeft>
            <Image
              style={{
                height: 35,
                width: 35,
                marginRight: 3
              }}
              source={{ uri: `${coin.icon}` }}
            />
            <View>
              <CoinSymbol>{coin.symbol}</CoinSymbol>
              <CoinName>{coin.name}</CoinName>
            </View>
          </ContainerLeft>
          <PriceButton>
            <ContainerArrowPrice>
              <CoinPrice>
                {Math.round(coin.price * 100) / 100} $
              </CoinPrice>
              {coin.priceChange1w > 0 ? (<MaterialIcons name="arrow-drop-up" size={25} color="green" />) : (<MaterialIcons name="arrow-drop-down" size={25} color="red" />)}
            </ContainerArrowPrice>
            <APIButton onPress={() => onButtonClick(coin)}>
              <AddButton>BUY NOW</AddButton>
            </APIButton>
          </PriceButton>
        </BackgroundColor>
      </CoinsList>
    </>
  )
}

export default CoinCard

const CoinsList = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 25px;
  width: 250px;
  height: 150px;
  padding: 10px;
  margin-top: 5px;
  margin-left: 12px;
`;
const BackgroundColor = styled(LinearGradient)`
  position: absolute;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  right: 0;
  top: 0;
  height: 120%;
  border-radius: 25px;
  padding: 10px;
`

const CoinName = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

const CoinSymbol = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 16px;
`

const CoinPrice = styled(CoinName)`
  font-size: 16px;
  color: black;
`;
const APIButton = styled.TouchableOpacity`
    min-width: 60px;
    border: none;
    background-color: black;
    padding: 2px;
    border-radius: 5px;
`
const PriceButton = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`
const ContainerLeft = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const AddButton = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
`
const ContainerArrowPrice = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`