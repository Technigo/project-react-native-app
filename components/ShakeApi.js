import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, Image  } from 'react-native';
import { Accelerometer } from 'expo-sensors';
import styled from 'styled-components/native'

const QuoteContainer = styled.View`
    border-radius: 10px;
    width: 90%;
    padding: 20px;
    margin: 10px;
    background-color: lightgrey;
    justify-content: center;
    align-items: center;
`
const TitleText = styled.Text`
    color: grey;
`
const RandomFox = 'https://randomfox.ca/floof/' //.image
const RandomDog = 'https://random.dog/woof.json' //.url
const RandomCat ='https://aws.random.cat/meow' //.file


const ShakeApi = () => {
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [quote, setQuote] = useState({})
  const [loading, setLoading] = useState(false)
  const [subscription, setSubscription] = useState(null);

  useEffect(() => {
      generateQuote()
  },[])

  useEffect(() => {
      Accelerometer.setUpdateInterval(1000)
      subscribe()
      return () => unsubscribe()
  }, [])

  useEffect(() => {
      if (isShakingEnough(data)) {
          generateQuote()
      }
  },[data])

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
      /* fetch('http://api.quotable.io/random') */
      fetch(RandomFox)
        .then((res) => res.json())
        .then((data) => setQuote(data))
        .finally(() => setLoading(false))
  }

  const isShakingEnough = (data) => {
      const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z)
      return totalForce > 1.78
  }

  if (loading) {
      return <ActivityIndicator />
  }
  console.log(quote.image)
  return (
      <QuoteContainer>
            <TitleText>Random Animal!</TitleText>
            <Image source = {{uri: quote.image}}
            style = {{ width: 200, height: 200 }}
            />
        {/*<QuoteText>Quote: {quote.content}</QuoteText>
          <Text>Author: {quote.author}</Text> */}
      </QuoteContainer>
    )
  }

  export default ShakeApi