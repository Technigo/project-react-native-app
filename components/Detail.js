import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import { Vibration } from "react-native";

export const Detail = () => {
  const [info, setInfo] = useState([])

  useEffect(() => {
    fetch('https://api.nasa.gov/planetary/apod?api_key=qSlGOjPnCXc7pgWt5QcdsI3nw45FfocwP6EggaOZ')
      .then((res) => res.json())
      .then((json) => setInfo(json))
  }, []) 
  return (
    <Container>
         <Date>{info.explanation}</Date>
    </Container>
  )
}

const Container = styled.View`
  flex:1;
  background-color: #222;
  justify-content: center;
  align-items: center;
  paddingHorizontal: 10;
  paddingVertical: 10;
`
const Date = styled.Text`
  font-size: 24px;
  color: violet;
  paddingHorizontal: 0;
  paddingVertical: 0;
`