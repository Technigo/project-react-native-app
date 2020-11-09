import React from 'react'
import styled from 'styled-components/native'

const Button = styled.TouchableOpacity`
height: 50px;
width: 250px;
background-color: 'darkcyan';
background-color: ${props => props.backgroundColor};
border-radius: 3px;
display:flex;
align-items: center;
justify-content: center;
`;

const ButtonText = styled.Text `
  font-weight: bold;
  color: white;
  font-size: 18px;
`;

export const CustomButton = ({onClick,text}) => {
  return (
    <Button 
      onPress={onClick}
      backgroundColor="teal">
      <ButtonText>{text}</ButtonText>
    </Button>
  )
}
