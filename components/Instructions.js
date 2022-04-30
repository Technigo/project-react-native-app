import React from "react"
import styled from 'styled-components/native'

//--------- Local styles ---------
const InstructionsText = styled.Text`
  color: #fff;
  text-align: justify;
  font-size: 16px;
`

const InstructionsContainer = styled.View`
  margin: 20px;
  background-color: #1d3557;
  border-radius: 20px;
  padding: 20px;
`
//--------------------------------

const Instructions = ({ instructionsText }) => {

  return (
    <InstructionsContainer>
      <InstructionsText>{instructionsText}</InstructionsText>
    </InstructionsContainer>
  )
}

export default Instructions
