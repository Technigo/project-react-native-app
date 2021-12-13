import React, { useState, useEffect } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { API_URL } from '../reusables/urls'

import styled from 'styled-components/native'

const Container = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const DogImage = styled.Image`
  height: 300px;
  width: 100%;
`
const Paragraph = styled.Text`
  font-size: 32px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 20px;
`

const NextButton = styled.TouchableOpacity`
  height: 40px;
  width: 110px;
  border-radius: 10;
  background-color: #e2b868;
  justify-content: center;
  align-items: center;
  margin: 20px 0 0 0;
  text-transform: uppercase;
  font-weight: bold;
`

const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
`;

const RandomDog = () => {
  const [dog, setDog] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    generateImage()
  }, [])

  const generateImage = () => {
    setLoading(true)
		fetch(API_URL)
			.then((res) => res.json())
			.then((data) => setDog(data))
      .finally(() => setLoading(false))
	}

  return (
    <Container>
      <Paragraph>Dog of the day</Paragraph>
      <DogImage source={{ uri: `${dog.url}`}}/>
      <NextButton
        onPress={generateImage}>
        <ButtonText>Next</ButtonText>
      </NextButton>
    </Container>
  )
}

export default RandomDog