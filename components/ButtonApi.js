import React, { useState } from "react"
import styled from "styled-components/native"
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  ImageBackground,
} from "react-native"

export const ButtonApi = () => {
  const [quote, setQuote] = useState({})
  const [loading, setLoading] = useState(false)

  const chandler = require("../assets/chandler.png")
  const joey = require("../assets/joey.png")
  const monica = require("../assets/monica.png")
  const phoebe = require("../assets/joey.png")
  const rachel = require("../assets/chandler.png")
  const ross = require("../assets/monica.png")
  const bgfriends = require("../assets/bgfriends.jpeg")

  const generateQuote = () => {
    setLoading(true)

    fetch("https://friends-quotes-api.herokuapp.com/quotes/random")
      .then((res) => res.json())
      .then((data) => setQuote(data))
      .finally(() => setLoading(false))
  }

  const GetQuote = () => {
    return (
      <>
        <TextWrapper>
          <QuoteText> {quote.quote}</QuoteText>
          <AutohorText> {quote.character}</AutohorText>
        </TextWrapper>
        <ApiButton onPress={generateQuote}>
          <Text> Get Your Quote </Text>
        </ApiButton>
      </>
    )
  }

  if (loading) return <ActivityIndicator />
  switch (quote.character) {
    case "Chandler": {
      return (
        <Wrapper>
          <Image style={{ width: 300, height: 300 }} source={chandler} />
          <GetQuote />
        </Wrapper>
      )
    }

    case "Joey": {
      return (
        <Wrapper>
          <Image style={{ width: 300, height: 300 }} source={joey} />
          <GetQuote />
        </Wrapper>
      )
    }
    case "Monica": {
      return (
        <Wrapper>
          <Image style={{ width: 300, height: 300 }} source={monica} />
          <GetQuote />
        </Wrapper>
      )
    }
    case "Phoebe": {
      return (
        <Wrapper>
          <Image style={{ width: 300, height: 300 }} source={phoebe} />
          <GetQuote />
        </Wrapper>
      )
    }
    case "Rachel": {
      return (
        <Wrapper>
          <Image style={{ width: 300, height: 300 }} source={rachel} />
          <GetQuote />
        </Wrapper>
      )
    }
    case "Ross": {
      return (
        <Wrapper>
          <Image style={{ width: 300, height: 300 }} source={ross} />
          <GetQuote />
        </Wrapper>
      )
    }

    default: {
      return (
        <>
          <Background source={bgfriends} />
          <ApiButton onPress={generateQuote}>
            <Text> Get Your Quote </Text>
          </ApiButton>
          <Background />
        </>
      )
    }
  }
}

const Background = styled.ImageBackground`
  display: contents;
  height: 100%;
  width: 100%;
  flex: 1;
  justify-content: center;
`

const Wrapper = styled.View`
  padding: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`
const TextWrapper = styled.View`
  background-color: #8000801a;
  width: 300px;
  margin: 20px;
`

const QuoteText = styled.Text`
  font-weight: 700;
  color: wheat;
  font-weight: 700;
  margin: 3px 20px;
  padding: 5px;
`
const AutohorText = styled.Text`
  color: orange;
  font-style: italic;
  margin: 3px 20px;
`

const ApiButton = styled.TouchableOpacity`
  width: 150;
  background-color: orange;
  margin: 10px auto;
  padding: 10px;
  border-radius: 5px;
  align-items: center;
  display: flex;
`
