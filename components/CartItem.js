import React from 'react'
import { useDispatch } from 'react-redux'
import { cart } from '../reducers/cart'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient';
import LottieView from 'lottie-react-native';

const CartItem = ({ coin }) => {
    // const dispatch = useDispatch()
    // const onQuantityDecrease = (coin) => {
    //     dispatch(cart.actions.removeItem(coin))
    // }

    return (
        <CoinsList key={coin.id}>
            <BackgroundColor colors={['rgba(149,149,149,0.742734593837535)', 'rgba(255,253,253,1)']}>
                <ContainerLeft>
                    <Image
                        style={{
                            height: 35,
                            width: 35,
                            marginRight: 3
                        }}
                        source={{ uri: `${coin.icon}` }}
                    />
                    {/* <View>
                        <TouchableOpacity onPress={() => onQuantityDecrease(coin)}><Text>-</Text></TouchableOpacity>
                    </View> */}
                    <View>
                        <CoinSymbol>{coin.symbol}</CoinSymbol>
                        <CoinName>{coin.name} x {coin.quantity}</CoinName>
                    </View>
                </ContainerLeft>
                <PortfolioBox>
                    <PortfolioAmount>
                        <PortfolioText>Portfolio</PortfolioText>
                        <PortfolioSum>$ {Math.round(coin.price * coin.quantity)}</PortfolioSum>
                    </PortfolioAmount>
                    <LottieView
                        source={require("../assets/coins-drop.json")}
                        style={{
                            width: 100,
                            height: 100,
                        }}
                        autoPlay
                    />
                </PortfolioBox>
            </BackgroundColor>
        </CoinsList>
    )
}

export default CartItem

const CoinsList = styled.View`
  display: flex;
  justify-content: space-between;
  border-radius: 25px;
  width: 250px;
  height: 150px;
  padding: 10px;
  margin-top: 5px;
  margin-left: 12px;
  margin-bottom: 30px;
`;
const BackgroundColor = styled(LinearGradient)`
  position: absolute;
  left: 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  right: 0;
  top: 0;
  height: 120%;
  border-radius: 25px;
  padding: 15px;
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

const ContainerLeft = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const PortfolioText = styled.Text`
    font-size: 16px;
    font-weight: bold;
    margin-left: 5px;
    color: #626262;
`

const PortfolioSum = styled.Text`
    font-size: 23px;
    font-weight: bold;
    color: black;
`
const PortfolioBox = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
const PortfolioAmount = styled.View`
    display: flex;
    margin-top: 40px;
`