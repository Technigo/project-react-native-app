import React from 'react'; 

import { Container, AboutTitle, AboutText, FooterText } from '../StyledComponents/AboutAppStyling';

export const AboutApp = () => { 
  return (
    <Container>
     <AboutTitle>Magic Oracle App 🔮</AboutTitle>
     <AboutText>
       Shows your Oracle (don't trust it though, 
       the oracle is very cranky sometimes!), when you shake your phone using the Advice Slip JSON API.
     </AboutText>
     <FooterText>
       Project developed during the Technigo frontend development bootcamp by Sofia Vaz Sousa 🦊 © 2020. 
       Images from FlatIcon and animations by Lottie.
     </FooterText>
    </Container> 
  );
};