import React, { useState, useEffect } from "react"
import { Accelerometer } from "expo-sensors"
import styled from "styled-components/native"
//import Icon from "react-native-vector-icons/AntDesign"
import { AntDesign } from "@expo/vector-icons"
import { ActivityIndicator, Image } from "react-native"

export const ShakeApi = () => {
  // setting movement to 0
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  })
  const [loading, setLoading] = useState(false) // sets loading to false
  const [quote, setQuote] = useState({}) // starts with an empty object with no quote
  const [subscription, setSubscription] = useState(null)

  // generates a quote
  useEffect(() => {
    generateQuote()
  }, [])

  useEffect(() => {
    Accelerometer.setUpdateInterval(1000)
    subscribe()
    return () => unsubscribe()
  }, [])

  // determines if the shaking is enough to update the quote
  useEffect(() => {
    if (isShakingEnough(data)) {
      generateQuote()
    }
  }, [data])

  // saves the subscription to stop using the accelerometer
  const subscribe = () => {
    setSubscription(
      Accelerometer.addListener((accelerometerData) => {
        setData(accelerometerData)
      })
    )
  }

  // stops reading accelerometer data
  const unsubscribe = () => {
    subscription && subscription.remove()
    setSubscription(null)
  }

  //  a mathematical calculation to see if the shaking is big enough
  const isShakingEnough = (data) => {
    const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z)
    return totalForce > 1.8
  }

  const generateQuote = () => {
    // fetches the quote from the API
    setLoading(true)
    fetch("https://friends-quotes-api.herokuapp.com/quotes/random")
      .then((res) => res.json())
      .then((data) => setQuote(data))
      .finally(() => setLoading(false))
  }

  /* Switchcases for images according to the characters name  */
  const CharactersImage = () => {
    switch (quote.character) {
      case "Chandler":
        return require("../assets/chandler.png")
        break
      case "Joey":
        return require("../assets/joey.png")
        break
      case "Monica":
        return require("../assets/monica.png")
        break
      case "Phoebe":
        return require("../assets/phoebe.png")
        break
      case "Rachel":
        return require("../assets/rachel.png")
        break
      case "Ross":
        return require("../assets/ross.png")
        break
      default:
        return require("../assets/bgfriends.jpeg")
    }
  }

  if (loading) return <ActivityIndicator />

  return (
    <>
      <Container>
        <Wrapper>
          <Image
            style={{ width: 300, height: 300 }}
            source={CharactersImage(quote.character)}
          />
          <TextWrapper>
            <QuoteText>"{quote.quote}"</QuoteText>
            <CharacterName> {quote.character}</CharacterName>
          </TextWrapper>
          <AntDesign name="shake" size={24} color="black" />
        </Wrapper>
      </Container>
    </>
  )

  //
}
const Container = styled.View`
  flex: 1;
  background-color: #965eb9;
  justify-content: center;
  align-items: center;
`

const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 0 auto;
  padding: 20px 3px;
  border-radius: 10px;
  background-color: #ffdf01;
`
const TextWrapper = styled.View`
  background-color: #3a3a3a1a;
  width: 300px;
  margin: 20px;
`

const QuoteText = styled.Text`
  font-weight: 700;
  color: black;
  font-weight: 700;
  margin: 3px 20px;
  padding: 5px;
`
const CharacterName = styled.Text`
  text-align: left;
  font-style: italic;
  margin: 3px 20px;
`
