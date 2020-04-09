import React, { useState, useEffect } from 'react'
import {Text} from 'react-native'
import styled from 'styled-components/native'


const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: flex-start;
  align-items: center;
`


export const DogDetails = ({ route }) => {
  const  { breed } = route.params
  return (
    <Container>
      <Text>Breed Details</Text>
      <Text>{breed.name}</Text>

    </Container>
  )

}