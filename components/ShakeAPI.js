import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { Accelerometer } from 'expo-sensors'

const Container = styled.View`  
  border: 2px solid #655D8A;
  border-radius: 6px;
`

const QuoteContent = styled.Text`
  font-size: 20px; 
  background-color: #655D8A;
  color: white;
  padding: 40px;
  line-height: 30px;
`

const QuoteAuthor = styled.Text`
  font-size: 16px;
  font-style: italic;
  text-align: right;
  padding-right: 12px;
  padding-bottom: 6px;
  background-color: #655D8A;
  color: #FFEEEE;
`

const Button = styled.TouchableOpacity`
  width: 100%;
  background-color: #D885A3;
  padding: 20px;
  border-radius: 6px;
  margin-top: 20px;
`

const ButtonText = styled.Text`
  font-size: 20px;
  color: white;
`

const ShakeAPI = () => {

    const [quote, setQuote] = useState({})

    const generateQuote = () => {
        fetch('https://api.quotable.io/random')
        .then(res => res.json())
        .then(data  => setQuote(data))
    }
 
    useEffect(() => {
        generateQuote() 
    }, [])

    const [data, setData] = useState({
        x: 0,
        y: 0,
        z: 0,
    })
      
    const [subscription, setSubscription] = useState(null)
    
    const subscribe = () => {
        setSubscription(
          Accelerometer.addListener(accelerometerData => {
            setData(accelerometerData)
          })
        )
      }
    
    const unsubscribe = () => {
        subscription && subscription.remove()
        setSubscription(null)
      }
    
    useEffect(() => {
    // Component mounts, execute the function below:
    subscribe()

    // Component unmounts below, execute the function in the return statement below:
    return () => unsubscribe()
    }, [])

    const isShaking = (data) => {
        const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z)
        return totalForce > 2
    }

    useEffect(() => {
        if (isShaking(data)) {
        generateQuote()
      }
    }, [data])

    return (
        <>
        <Container>
            {isShaking(data) && generateQuote()}
            <QuoteContent>"{quote.content}"</QuoteContent>
            <QuoteAuthor>{quote.author}</QuoteAuthor>
        </Container>
        <View>
            <Button onPress={generateQuote}>
                <ButtonText>New Quote 🤍</ButtonText>
            </Button>        
        </View>
        </>
    )
}

export default ShakeAPI