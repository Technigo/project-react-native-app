import React, { useState } from 'react'
import styled from 'styled-components'
import { CustomButton } from './CustomButton'
import { Image } from 'react-native'

const Container = styled.View`
  flex: 1
  background-color: papayawhip
  justify-content: center
  align-items: center
`

const Title = styled.Text`
  font-size: 22px
  color: palevioletred
  padding: 2px
  font-weight: 700
`

const App = () => {

  const [dogURL, setDogURL] = useState('')

  const GetImage = () => {
    return (
      fetch('https://dog.ceo/api/breeds/image/random')
        .then((res) => res.json())
        .then((json) => setDogURL(json.message))
        .catch((error) => console.error(error))
    )
  }

  return (
    <Container>

      <Title>PRESS THE BUTTON TO PUT</Title>
      <Title>A SMILE ON YOUR FACE</Title>

      <Image
        source={{ uri: dogURL }}
        style={{
          height: 300,
          width: 300,
          borderRadius: 8,
          margin: 20,
        }} />

      <CustomButton
        text="🐶🐶🐶"
        color="#01d1e5"
        backgroundColor="lavenderblush"
        onPress={GetImage} />

    </Container>
  )
}

export default App
