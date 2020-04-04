import React, { useState} from "react"
import Header from './Header';
import styled from 'styled-components/native'

const Quotes = [
  {
    answear: "It is certain.",
  },
  {
    answear: "It is decidedly so.",
  },
  {
    answear: "Without a doubt.", 
  },
  {
    answear: "Yes, definitely.", 
  },
  {
    answear: "You may rely on it.", 
  },
  {
    answear: "As I see it, yes.", 
  },
  ]

 const App = () => {
  const [quote, setQuote] = useState(0)  

  const showQuote = () => {
    const randomIndex = Math.floor(Math.random() * Quotes.length)
    setQuote(Quotes[randomIndex])
  }

  return (
    <Container>

        <Header title="Mood for today?" />
      
        <Title> {quote.answear}</Title>

        <Button onPress={showQuote}>
        <H1>Ask me</H1>
        </Button>
        
      
    </Container>
  )

}

const Container = styled.View`
  flex: 1;
  background-color: #8CFFBA;
  justify-content: center;
  align-items: center;
`

const Title = styled.Text`
  font-size: 24px;
  color: palevioletred;
`

const Button = styled.TouchableOpacity`
  font-size: 26px;
  background-color: #9a81d1;
`

const H1 = styled.Text`
  font-size: 22px;
  color: grey;
  padding: 10px 50px;
  text-align: center;
  `

export default App
