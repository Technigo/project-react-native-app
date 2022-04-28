import React, { useState, useEffect } from 'react'
import { Accelerometer } from 'expo-sensors'
import styled from 'styled-components/native'
import AppLoading from 'expo-app-loading'
import { useFonts, Bangers_400Regular } from '@expo-google-fonts/bangers'

// ==========================
// = Functions
const isShaking = (data) => {
  const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z)
  return totalForce > 1.8
}

// ==========================
// = Styled components

const ShakeView = styled.View`
  display: flex;
  flex-direction: column;
`

const Title = styled.Text`
  font-size: 28px;
  font-weight: bold;
  margin-top: 40px;
  margin-bottom: 30px;
  color: #000;
  text-align: center;
`

const StyledText = styled.Text`
  margin-left: 40px;
  margin-right: 40px;
  text-align: center;
  font-size: 18px;
`

// ==========================
// = Jokes

const jokes = [
  'Why does Norway have barcodes on their battleships? So when they get back to port, they can Scandinavian.',
  "The biggest knight at King Arthur's round table was Sir Cumference. He acquired his size from eating too much pi.",
  'As I suspected, someone has been adding soil to my garden. The plot thickens.',
  'An apple a day keeps the bullies away. If you throw it hard enough.',
  'My boss told me to have a good day. So I went home...',
  'What happens when you anger a brain surgeon? They will give you a piece of your mind.',
  "How many kids with ADD does it take to change a lightbulb? Let's go ride bikes!",
  'Why are skeletons so calm? Because nothing gets under their skin.',
  'I had a dream that I was a muffler last night. I woke up exhausted!',
  'What do you call a boy who stopped digging holes? Douglas.',
  'How do you get two whales in a car? Start in England and drive West.',
  "I bought shoes from a drug dealer once. I don't know what he laced them with, but I was tripping all day.",
  "Why can't a bicycle stand on its own? It's two-tired.",
  'Have you ever heard of a music group called Cellophane? They mostly wrap.',
  "Don't buy flowers at a monastery. Because only you can prevent florist friars.",
  'I needed a password eight characters long so I picked Snow White and the Seven Dwarfs.',
  "The great thing about stationery shops is they're always in the same place...",
  "Doctor you've got you help me, I'm addicted to twitter. Doctor: I don't follow you.",
  'What is the hardest part about sky diving? The ground.',
  "Why don't sharks eat clowns? Because they taste funny.",
  'What’s Forest Gump’s Facebook password? 1forest1',
]

export const SensorComponent = () => {
  const [joke, setJoke] = useState([])

  const getRandomJoke = () => {
    setJoke(jokes[Math.floor(Math.random() * jokes.length)])
  }

  // This function determines how often our program reads the accelerometer data in milliseconds
  // https://docs.expo.io/versions/latest/sdk/accelerometer/#accelerometersetupdateintervalintervalms
  Accelerometer.setUpdateInterval(400)

  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  })

  // This keeps track of whether we are listening to the Accelerometer data
  const [subscription, setSubscription] = useState(null)

  const _subscribe = () => {
    // Save the subscription so we can stop using the accelerometer later
    setSubscription(
      // This is what actually starts reading the data
      Accelerometer.addListener((accelerometerData) => {
        // Whenever this function is called, we have received new data
        // The frequency of this function is controlled by setUpdateInterval
        setData(accelerometerData)
      })
    )
  }

  // This will tell the device to stop reading Accelerometer data.
  // If we don't do this our device will become slow and drain a lot of battery
  const _unsubscribe = () => {
    subscription && subscription.remove()
    setSubscription(null)
  }

  useEffect(() => {
    // Start listening to the data when this SensorComponent is active
    _subscribe()

    // Stop listening to the data when we leave SensorComponent
    return () => _unsubscribe()
  }, [])

  useEffect(() => {
    if (isShaking(data)) {
      getRandomJoke()
    }
  }, [data])

  let [fontsLoaded] = useFonts({
    Bangers_400Regular,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ShakeView>
      <Title style={{ fontFamily: 'Bangers_400Regular', fontSize: 40 }}>
        Shake me for jokes
      </Title>
      <StyledText>{joke}</StyledText>
    </ShakeView>
  )
}
