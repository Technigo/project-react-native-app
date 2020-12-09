import React from 'react'
import styled from 'styled-components/native'

const Button = styled.TouchableOpacity`
  height: 50px;
  width: 250px;
  background-color: ${props => props.backgroundColor};
  border-radius: 3px;
  display:flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #00106b;
`;

const ButtonText = styled.Text `
  font-weight: bold;
  color: #00106b;
  font-size: 18px;
`;

export const CustomButton = ({onClick,text}) => {
  return (
    <Button 
      onPress={onClick}
      backgroundColor="#fbd466">
      <ButtonText>{text}</ButtonText>
    </Button>
  )
}
