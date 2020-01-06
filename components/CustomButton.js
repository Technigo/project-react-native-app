import React from 'react'
import styled from "styled-components"

const CustomButton = props => (
  <ButtonContainer
    onPress={() => alert("Hi, there is a link to this article if you click on the text")}
    backgroundColor={props.backgroundColor}
  >
    <ButtonText textColor={props.textColor}>{props.text}</ButtonText>
  </ButtonContainer>

);

export default CustomButton

const ButtonContainer = styled.TouchableOpacity`
  width:100px;
  height:40px;
  background-color: ${props => props.backgroundColor};
  border-radius: 8px;
  padding: 8px 16px;
`

const ButtonText = styled.Text`
  color: ${props => props.textColor};
  font-size: 15px;
  text-align: center;
  `

