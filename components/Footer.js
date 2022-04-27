import React from 'react'
import styled from 'styled-components/native'


const FooterView = styled.View`
width: 100%;
flex-direction: column;
height: 60px;
`

const FooterText = styled.Text`
text-align: center;
font-size: 16px;
font-size: 18px;
  color: #C68507;
`


const Footer = () =>  {
    return (
        <FooterView>
            <FooterText>Emma Lindell</FooterText>
            <FooterText>Technigo Bootcamp 2022</FooterText>
        </FooterView>

    )
}

export default Footer