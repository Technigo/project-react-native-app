import React from 'react'
import styled from 'styled-components'
import { CustomButton } from './CustomButton'

const Container = styled.View`
  flex: 1
  background-color: papayawhip
  justify-content: center
  align-items: center
`

const Title = styled.Text`
  font-size: 24px
  color: palevioletred
  padding: 7px
  font-weight: 700
`

const App = () => {
  return (
    <Container>

      <Title>Click the button,</Title>
      <Title>it will make you happy!</Title>

      <CustomButton
        text="🐶🐕‍🦺🐩🐕🐶"
        color="#01d1e5"
        backgroundColor="lavenderblush" />

    </Container>
  )
}

export default App
