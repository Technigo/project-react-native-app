import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native'
import styled from 'styled-components/native'
import { useSelector } from 'react-redux'
import CoinCard from './CoinCard'
import Cart from './Cart'
import CartItem from './CartItem'
import LottieView from 'lottie-react-native';

const Portfolio = ({ navigation }) => {
    const [coins, setCoins] = useState([])
    const [loading, setLoading] = useState(false)

    const chosenCoins = useSelector((store) => store.cart.items)
    console.log(chosenCoins)
    console.log(chosenCoins)
    useEffect(() => {
        generateQuote()
    }, [])

    const generateQuote = () => {
        setLoading(true)
        fetch('https://api.coinstats.app/public/v1/coins?skip=0&limit=12&currency=USD')
            .then((res) => res.json())
            .then((data) => {
                setCoins(data.coins)
            })
            .finally(() => setLoading(false))
    }

    if (loading) {
        return <ActivityIndicator size="large" />
    }

    return (
        <Container>
            <BalanceContainer>
                <BalanceText>Your current balance <Text className="emoji" role="img" aria-label="cart">💰</Text></BalanceText>
                <Cart />
            </BalanceContainer>
            <RankingText>My portfolio</RankingText>
            {
                chosenCoins.length === 0 ? (
                    <LottieView
                        source={require("../assets/floating-bitcoin.json")}
                        style={{
                            width: 250,
                            height: 250,
                        }}
                        autoPlay
                    />
                ) : (
                    <ScrollView horizontal={true} style={{ marginLeft: 12 }} >
                        {chosenCoins.map((coin) => (
                            <CartItem key={coin.id} coin={coin} />
                        ))}
                    </ScrollView>
                )
            }
            <RankingText>Ranking List</RankingText>
            <ScrollView horizontal={true} style={{ marginLeft: 12 }} >
                {coins.map((coin) => (
                    <CoinCard key={coin.id} coin={coin} />
                ))}
            </ScrollView>
            <ButtonContainer>
                <GoNextPage onPress={() => navigation.navigate('RandomCrypto')}>
                    <ButtonText>Discover new currency</ButtonText>
                </GoNextPage>
            </ButtonContainer>
        </Container >
    )
}

export default Portfolio

const Container = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const GoNextPage = styled.TouchableOpacity`
    background-color: white;
    margin-top: 30px;
    text-align: center;
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 300px;
    border-radius: 50px;
`
const ButtonText = styled.Text`
    font-size: 25px;
    font-weight: bold;
    color: orange;
    text-align: center;
`;

const BalanceContainer = styled.View`
    height: 150px;
    display: flex;
    align-items: flex-start;
    padding: 10px 3px;
    justify-content: center;
    width: 85%;
    border-radius: 25px;
`
const BalanceText = styled.Text`
    font-size: 25px;
    color: black;
`
const RankingText = styled.Text`
    font-size: 25px;
    display: flex;
    align-self: flex-start;
    margin-left: 28px;
    color: grey;
`
const ButtonContainer = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center
`