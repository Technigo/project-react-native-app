import React, { useState, useEffect } from "react"
import styled from "styled-components/native"

const apiKey = `const apiKey = 'K3UmmZiUOJcE1TWabtU7ygeF`;
const url = `https://api.fungenerators.com/taunt/generate?category=pirate-insult`;

export const App = () => {
  const [insult, setInsult] = useState([]);


  useEffect(() => {
    fetch(url, { headers: { Authorization: apiKey } })
      .then(res => res.json())
      .then(json => {
        setInsult(json.insult);
        console.log(json);
      });
  }, []);

  return (
    <Container>
      <Title>taunt</Title>
      <Title>Go to App.js and start coding</Title>
      <Title>💅💅💅</Title>
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

export default App
