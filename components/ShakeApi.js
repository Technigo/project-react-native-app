import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator } from 'react-native'
import styled from "styled-components/native"
import { Accelerometer } from "expo-sensors"

//react-native doesn't understand html, because it is for browsers. We use core-components instead:
const QuoteText = styled.Text`
font-weight: 500;
`
const ShakeView = styled.View`
border: 2px solid orange;
margin: 10px;
padding: 10px;
`
const ShakeApi = () => {
    const [quote, setQuote] = useState({})
    const [loading, setLoading] = useState(false)
    
    useEffect (() => {
        generateQuote()
    }, [])
    useEffect(() => { // when function is mounted, the subscription is subscribed
        subscribe();
        return () =>unsubscribe(); // when component is unmounted we can write 'return()=>'  to add something before it gets mounted.
    }, [])
    useEffect (() => {
        if (isShakingEnough(data)){
            generateQuote()
        }
    }, [data])

    const [data, setData] = useState({
        x: 0,
        y: 0,
        z: 0,
    })
    const [subscription, setSubscription] = useState(null)//constant communication about location, needs to have additional "unsubscribe". backend is informing, without asking from front-end

    const subscribe = () => {
        Accelerometer.setUpdateInterval(1000)
        setSubscription(
            Accelerometer.addListener((accelerometerData) => {
            setData(accelerometerData);
        }))
    }    
    const unsubscribe = () => {
        subscription && subscription.remove();
        setSubscription(null);
    }
    const generateQuote = () => {
        setLoading(true)
        fetch('http://api.quotable.io/random')
        .then(res => res.json())
        .then((quote) => setQuote(quote))	
        .finally(() => setLoading(false))
    }
    const isShakingEnough = (data) =>{
        const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z)
        return totalForce > 1.8
    }
    if (loading) {
        return <ActivityIndicator /> //this is already built-in from 'native'
    }	
    const { x, y, z } = data

    return (
        <ShakeView>
            <QuoteText>Quote: {quote.content}</QuoteText>
            <Text>Author: {quote.author}</Text>
        </ShakeView>
    )
}        

export default ShakeApi