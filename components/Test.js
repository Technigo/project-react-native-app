import React from 'react'
import styled from 'styled-components/native'

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const Text = styled.Text`
  color: #000;
  font-size: 100px;
  font-family: 'CourierNewPS-BoldMT';
`

const Eightball = styled.View`
  width: 300px;
  height: 300px;
  background-color: #000;
  border-radius: 300;
  overflow: hidden;
  justify-content: center;
  align-items: center;
`

const Test = () => {

  return (
    <Container>
        <Text>
          Try the magic 8-ball
        </Text>
    </Container>
  )
}

export default Test
