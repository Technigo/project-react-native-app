import React from 'react'
import styled from 'styled-components/native'
import { Text, View } from 'react-native';

const Container = styled.View`
flex: 1;
background-color: orange;
justifyContent: space-between;
paddingHorizontal: 20;
paddingVertical: 20;
`

const Title = styled.Text`
  font-size: 24px;
  color: palevioletred;
`

const InterTitle = styled.Text`
  font-size: 24px;
  color: palevioletred;
`

export const Detail = () => {
  
  return (
    <Container>
     <InterTitle>details here</InterTitle>
    </Container>
  )
}