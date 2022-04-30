import React from "react"
import styled from 'styled-components/native'

//--------- Local styles ---------
const PrimaryButtonContainer = styled.TouchableOpacity`
  min-width: 100px;
  border-radius: 30px;
  padding: 10px 20px;
  background-color: #1d3557;
  border: 4px solid #e63946;
`

const PrimaryButtonText = styled.Text`
  font-weight: bold;
  text-align: center;
  color: #fff;
  font-size: 18px;
`

const SecondaryButtonContainer = styled(PrimaryButtonContainer)`
  margin: 10px;
  background-color: #fff;
  border: 4px solid #1d3557;
`

const SecondaryButtonText = styled(PrimaryButtonText)`
  color: #000;
  font-size: 16px;
`
//--------------------------------

export const PrimaryButton = ({ primaryButtonText, onPress }) => {

  return (
    <PrimaryButtonContainer onPress={onPress}>
      <PrimaryButtonText>{primaryButtonText}</PrimaryButtonText>
    </PrimaryButtonContainer>
  )
}

export const SecondaryButton = ({ secondaryButtonText, onPress }) => {

  return (
    <SecondaryButtonContainer onPress={onPress}>
      <SecondaryButtonText>{secondaryButtonText}</SecondaryButtonText>
    </SecondaryButtonContainer>
  )
}
