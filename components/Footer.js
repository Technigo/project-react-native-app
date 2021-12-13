import React from 'react'
import styled from 'styled-components/native'

const FooterView = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 60px;
  position: absolute;
  bottom: 0px;
  left: 10px;
`

const FooterText = styled.Text`
  text-align: center;
  font-family: 'Arial, Helvetica, sans-serif';
  font-size: 16px;
  color: #ff9c2b;
`

const Footer = () => {
  return(
    <FooterView>
      <FooterText>Jenny Quach - Technigo Bootcamp 2021</FooterText>
    </FooterView>
  )
}

export default Footer