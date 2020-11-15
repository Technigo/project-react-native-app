import React from 'react'
import styled from 'styled-components/native'

const FooterStyle = styled.Text`
  margin: 130px 18px 0px 18px;
  justify-content: flex-end;
  align-items: flex-end;
  align-content: flex-end;
`

const FooterText = styled.Text`
  font-size: 14px;
  text-align: center;
`

export const Footer = () => {
  return (
    <FooterStyle>
        <FooterText>
          Made by Peggy @blipsandclicks during Technigo Bootcamp 2020 for educational purposes. API data from ACNH API (v1). Placeholder image and app icon from Nintendo.
        </FooterText>
    </FooterStyle>
  )
}
