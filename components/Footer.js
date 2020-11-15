import React from 'react'

import technigo from '../assets/technigo.png'
import { FooterContainer,FooterText,TechnigoImage } from './Style/StyleFooter'

export const Footer = () => {
  return (
    <FooterContainer> 
      <FooterText>© 2020 Karan Mann 👨‍🍳</FooterText>
      <TechnigoImage source={technigo}/>
      <FooterText>Project developed during the </FooterText>
      <FooterText>Technigo Frontend development bootcamp</FooterText>
    </FooterContainer>
  )
}