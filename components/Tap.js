import React, { useState } from 'react'
import styled from 'styled-components/native'

export const Tap = () => {
    const [count, setCount] = useState(0)

    return (
     <Container>
        <Title>Nothing to do?</Title>
            <Info>How many aliens? {count}</Info>
        <Info title="tap tap" onPress={() => setCount(count + 1)}>👽</Info>
     </Container>
    )
}

const Container = styled.View`
flex: 3;
background-color: #f600a2;
justifyContent: space-between;
paddingHorizontal:50;
paddingVertical: 50;
`

const Title = styled.Text`
  flex: 1;
  font-size: 24px;
  color: palevioletred;
  color: white;
  font-weight: bold;
`

const Info = styled.Text`
flex: 2;
background-color: papayawhip;
justify-content: center;
align-items: center;
color: blue;
font-size: 45px;
`