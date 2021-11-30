import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native'
import styled from 'styled-components/native'
import CoinCard from './CoinCard'
import Cart from './Cart'

const Portfolio = ({ navigation }) => {
    const [coins, setCoins] = useState([])
    const [loading, setLoading] = useState(false)

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
            <View>
                <Cart />
            </View>
            <ScrollView horizontal={true} >
                {coins.map((coin) => (
                    <CoinCard key={coin.id} coin={coin} />
                ))}
            </ScrollView>
            <GoNextPage onPress={() => navigation.navigate('RandomCrypto')}>
                <ButtonText>Random Coin Info</ButtonText>
            </GoNextPage>
        </Container>
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
    background-color: orange;
    margin-top: 30px;
    text-align: center;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 300px;
    border-radius: 50px;
`
const ButtonText = styled.Text`
    font-size: 25px;
    font-weight: bold;
    color: white;
`;
const CoinsList = styled.View`
  display: flex;
  flex-flow: wrap row;
  justify-content: space-around;
`;