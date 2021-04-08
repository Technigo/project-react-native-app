import React from 'react'
import styled from 'styled-components/native'



const CustomButton = styled.TouchableOpacity`
background-color: #aaaaee;
padding: 15px;
border-radius: 3px;
margin-top: 30px;
width: 230px;
align-items: center;
`
const ButtonText = styled.Text`
font-size: 16px;
`


export const MyCustomButton = (props) => {

  const {text = 'Enter', onPress } = props
  
  return (
    <CustomButton onPress={onPress}>
      <ButtonText>{props.text}</ButtonText>
    </CustomButton>
  )
}