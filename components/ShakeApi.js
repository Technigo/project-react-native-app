import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import styled from 'styled-components/native'
import { Accelerometer } from 'expo-sensors'


const Container = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: whitesmoke;
`

const ShakeApi = () => {
    const [data, setData] = useState({
        x: 0,
        y: 0,
        z: 0,
    });
    const [randomCoin, setRandomCoins] = useState([])
    const [loading, setLoading] = useState(false)
    const [subscription, setSubscription] = useState(null);

    useEffect(() => {
        generateQuote()
    }, [])

    useEffect(() => {
        Accelerometer.setUpdateInterval(1000);
        subscribe();
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        if (isShakingEnough(data)) {
            generateQuote()
        }
    }, [data]); //every time the data property will change

    const subscribe = () => {
        setSubscription(
            Accelerometer.addListener(accelerometerData => {
                setData(accelerometerData);
            })
        );
    };

    const unsubscribe = () => {
        subscription && subscription.remove();
        setSubscription(null);
    };


    const generateQuote = () => {
        setLoading(true)
        fetch('https://api.coinstats.app/public/v1/coins?skip=0&limit=30&currency=SEK')
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                const randomCoin = data.coins[Math.floor(Math.random() * data.coins.length)]
                setRandomCoins(randomCoin)
            })
            .finally(() => setLoading(false))
    }
    const isShakingEnough = (data) => {
        const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);
        return totalForce > 1.78; //boolean
    };

    if (loading) {
        return <ActivityIndicator size="large" />
    }

    return (
        <View>
            <Container key={randomCoin.id}>
                <Text>{randomCoin.name}</Text>
            </Container>
        </View >
    )
}

export default ShakeApi