import React from 'react'
import styled from 'styled-components/native'
import { Share } from 'react-native'

const Container = styled.View`
    background-color: whitesmoke;
    display: flex;
    align-items: center;
`

const ButtonTouchableOpacity = styled.TouchableOpacity`
    background-color: pink; 
    color: black;
    padding: 10px;
    border-radius: 10px;
`

const ButtonText = styled.Text`
    font-size: 20px;
    font-weight: 500;
`

const ShareText = ({ fact }) => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'Check this out!',
        message: `${fact}`
      })
      } catch (error) {
        alert(error.message)
      } 
    }

  return (
    <Container>
      <ButtonTouchableOpacity onPress={onShare}>
        <ButtonText>
          Share
        </ButtonText>
      </ButtonTouchableOpacity>
    </Container>
  )
}

export default ShareText 