import React from 'react'
import styled from 'styled-components/native'

const Container = styled.View`
flex: 1;
background-color: #f600a2;
justifyContent: space-between;
paddingHorizontal: 40;
paddingVertical: 40;
`

const Title = styled.Text`
  font-size: 24px;
  color: palevioletred;
  color: white;
  font-weight: bold;
`

export const Detail =  () => {
 
  
  return (
    <Container>
      <Title>hej</Title>
      {/* <Title>{images.title}</Title>
      <Title>{images.explanation}</Title> */}
    </Container>
  )
}