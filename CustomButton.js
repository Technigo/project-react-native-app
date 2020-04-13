import React from 'react'
import styled from 'styled-components'

const ButtonContainer = styled.TouchableOpacity`
  width: 250px
  height: 85px
  border: 2px solid palevioletred
  border-radius: 10px  
  background-color: ${props => props.backgroundColor}
`

const Button = styled.Text`
    font-size: 30px
    color: ${props => props.textColor}
    text-align: center
    margin: auto
`

export const CustomButton = (props) => {

  return (
    <ButtonContainer
      onPress={props.onPress}
      backgroundColor={props.backgroundColor}>

      <Button
        textColor={props.color}>
        {props.text}
      </Button>

    </ButtonContainer >
  )
}


