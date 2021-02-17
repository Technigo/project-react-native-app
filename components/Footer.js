import React from 'react'
import styled from 'styled-components/native'

const FooterContainer = styled.View`
  margin: 30px 0px 0px 0px;
  height: 150px;
  flex-direction: column-reverse;
  background-color: #bbead5;
`

const TextSpan = styled.Text`
  font-size: 14px;
`

export const Footer = () => {
  return (
    <FooterContainer>
        <TextSpan>
          Made by Peggy @blipsandclicks during Technigo Bootcamp 2020 for educational purposes.
        </TextSpan>
        <TextSpan>
          API data from ACNH API (v1).&nbsp;
          Select images from Nintendo.
        </TextSpan>
    </FooterContainer>
  )
}