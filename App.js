import React, { useState, useEffect } from "react"
import styled from "styled-components/native"
import { DeviceMotion } from "expo-sensors"

const quotes = [
  "You've got to ask yourself one question: 'Do I feel lucky?' Well, do ya punk?",
  "Toto, I've a feeling we're not in Kansas anymore",
  "We'll always have Paris",
  "Here's Johnny!",
  "I'll be back",
  "Get busy living, or get busy dying",
  "Do — or do not. There is no try",
  "My Mama always said, 'Life was like a box of chocolates; you never know what you're gonna get",
  "Go ahead, make my day",
  "Shaken, not stirred",
  "Nobody puts baby i a corner",
  "Wax on, wax off",
  "Hasta la vista, baby",
  "The first rule of Fight Club is: You do not talk about Fight Club",
  "Show me the money!",
  "I'm also just a girl, standing i front of a boy, asking him to love her",
  "Keep your friends close, but your enemies closer",
  "I see dead people",
  "I'm the king of the world!",
  ""
]

const App = () => {
  const [quote, setQuote] = useState()

  const showRandomQuote = () => {
    console.log("bytt")
    const randomIndex = Math.round(Math.random() * (quotes.length - 1))
    setQuote(quotes[randomIndex])
  }

  let subscription = null

  const subscribe = () => {
    subscription = DeviceMotion.addListener(motionData => {
      console.log(motionData.rotationRate.alpha)
      if (
        motionData.rotationRate.alpha > 8 ||
        motionData.rotationRate.alpha < -8
      ) {
        showRandomQuote()
      }
    })
    DeviceMotion.setUpdateInterval(1000)
  }

  const unsubscribe = () => {
    subscription.remove()
  }

  useEffect(() => {
    subscribe()

    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <Container>
      <Image resizeMode='contain' source={require("./assets/logo_2.png")} />
      <Title>
        {quote ||
          "The cat will always be by your side and help you find, if not the right thing, at least something to say! Let it help you find your inner movie star."}
      </Title>
      <Subtitle>Spin your phone to get a quote!</Subtitle>
    </Container>
  )
}

const Container = styled.View`
  flex: 1;
  background-color: black;
  justify-content: center;
  align-items: center;
`

const Image = styled.Image`
  height: 330;
  margin-bottom: 70;
`

const Title = styled.Text`
  font-size: 21px;
  color: white;
  margin-bottom: 20;
  text-align: center;
  padding: 0 15px;
`

const Subtitle = styled.Text`
  font-size: 16px;
  color: white;
  padding: 10px 50px;
  text-align: center;
`

export default App
