import React from 'react';
import styled from 'styled-components/native';


const FooterTextContainer = styled.View`
  flex:0.2;
  justify-content: center;
  align-items: center;
`;

const FooterText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: black;
`;

 const Footer = () => {
  return (
    <FooterTextContainer>
      <FooterText>Shake me for new joke!</FooterText>
    </FooterTextContainer>
  )
};

export default Footer;