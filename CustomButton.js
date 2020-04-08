import React from 'react'
import styled from 'styled-components'

const ButtonContainer = styled.TouchableOpacity`
    width: 200px
    height: 100px
    border: 1px dotted hotpink
    border-radius: 30px  
    margin: 20px
    background-color: ${props => props.backgroundColor}
`

const Button = styled.Text`
    font-size: 25px
    color: ${props => props.textColor}
    text-align: center
    padding: 35px
`
// Fetch this API:
// https://dog.ceo/api/breeds/image/random
// make a random image appear on the screen (instead of the text) when clicking the button

export const CustomButton = props => (

  <ButtonContainer
    onPress={() => alert('Hola!')}
    backgroundColor={props.backgroundColor}>

    <Button
      textColor={props.color}>
      {props.text}
    </Button>

  </ButtonContainer>
)


