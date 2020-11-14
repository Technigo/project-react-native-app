import React from 'react'
import styled from 'styled-components/native'



export const Paragraph = styled.Text`
font-size: 25px;
margin: 10px;
color: rgb(235, 196, 218);
`

export const NewButton = styled.TouchableOpacity`
height: 60px;
width: 150px;
background-color: rgb(58, 15, 76);
border-radius: 20px;
justify-content: center;
align-items: center;
margin: 10px 10px;
`
export const ButtonText = styled(Paragraph)`
color: rgb(235, 196, 218);
font-weight: bold;
width: 100%;
text-align: center;
font-size: 25px;
`

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const Number = styled.Text`
font-size: 80px;
color: white;
`

export const ButtonContainer = styled.View`
   flex-direction:row;
   `