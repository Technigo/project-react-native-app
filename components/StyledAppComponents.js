import React from 'react'
import styled from 'styled-components/native'

export const Paragraph = styled.Text`
font-size: 25px;
margin: 10px;
`

export const NewButton = styled.TouchableOpacity`
height: 60px;
width: 150px;
background-color: grey;
border-radius: 20px;
justify-content: center;
align-items: center;
margin: 10px 10px;
`
export const ButtonText = styled(Paragraph)`
color: white;
font-weight: bold;
width: 100%;
text-align: center;
`

export const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`

export const Number = styled.Text`
font-size: 80px;
`

export const ButtonContainer = styled.View`
   flex-direction:row;
   `