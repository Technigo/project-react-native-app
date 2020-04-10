import React from 'react'
import styled from 'styled-components/native'

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

const InterTitle = styled.Text`
  font-size: 24px;
  font-family: 'Inter-Black';
  color: palevioletred;
`

export const Detail = ({ route }) => {
  const { house } = route.params
  return (
    <Container>
      <Title>Detail screen</Title>
      <InterTitle>{house.name}</InterTitle>
      <Title>{house.region}</Title>
    </Container>
  )
}
