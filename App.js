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

      <Button
          title="ASK ME ANYTHING" onPress={showQuote}></Button>
        
      
    </Container>
  )

}

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`

const Title = styled.Text`
  font-size: 24px;
  color: palevioletred;
`

const Button = styled.Button`
  font-size: 24px;
  color: palevioletred;
`

export default App
