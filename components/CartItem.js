import React from 'react'
import { useDispatch } from 'react-redux'
import { cart } from '../reducers/cart'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient';

const CartItem = ({ coin }) => {
    // const dispatch = useDispatch()

    // const onQuantityIncrease = (coin) => {
    //     dispatch(cart.actions.addItem(coin))
    // }

    // const onQuantityDecrease = (coin) => {
    //     dispatch(cart.actions.removeItem(coin))
    // }

    return (
        <CoinsList key={coin.id}>
            <BackgroundColor colors={['rgba(240,86,12,1)', 'rgba(0,121,255,1)']}>
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
                        <TouchableOpacity onPress={() => onQuantityIncrease(coin)}><Text>+</Text></TouchableOpacity>
                    </View> */}
                    <View>
                        <CoinSymbol>{coin.symbol}</CoinSymbol>
                        <CoinName>{coin.name}</CoinName>
                        {/* <Text>x{coin.quantity}</Text>
                    <Text>{coin.price * coin.quantity}:-</Text> */}
                    </View>
                </ContainerLeft>
                <View>
                    <PortfolioText>Portfolio</PortfolioText>
                    <PortfolioSum>$ {Math.round(coin.price * coin.quantity)}</PortfolioSum>
                </View>

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
    color: whitesmoke;
`

const PortfolioSum = styled.Text`
    font-size: 23px;
    font-weight: bold;
    color: black;
`