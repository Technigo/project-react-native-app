import React from 'react'
import styled from 'styled-components/native';


export const Footer = () => {
  return (
    <FooterTextContainer>
      <FooterText>Shake me for new joke!</FooterText>
    </FooterTextContainer>
  )
}

const FooterTextContainer = styled.View`
  background-color: #3596B5;
  flex:0.2;
  justify-content: center;
  align-items: center;
`;


const FooterText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: black;
`;