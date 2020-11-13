import React from 'react'
import styled from 'styled-components/native'

export const Paragraph = styled.Text`
font-size: 25px;
`

export const NewButton = styled.TouchableOpacity`
height: 60px;
width: 200px;
background-color: grey;
border-radius: 20px;
justify-content: center;
align-items: center;
margin: 10px 0;
`
export const ButtonText = styled(Paragraph)`
color: white;
font-weight: bold;
width: 100%;
text-align: center;
`