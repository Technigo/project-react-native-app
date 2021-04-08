import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';

import { API_URL } from './reusable/urls';



const App = () => {
  const [ advice, setAdvice] = useState([]);

  useEffect(()=> {
    fetchAdvice();
  },);

  const fetchAdvice = () => {
    fetch(API_URL)
    .then(res => res.json())
    .then(data => setAdvice(data.slip.advice))
    .catch(err => console.log(err)); 
  }

  return (
    <Container>
      <Title>Random Advice Giver</Title>
      <Title>Your daily doses of unsolicited advice</Title>
      <Text>{advice}</Text>
      <Title>💅💅💅</Title>
    </Container>
  )
}

export default App

/* Styling*/

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

const Text = styled.Text`
  font-size: 24px;
  color: palevioletred;
`