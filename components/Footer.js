import React from 'react';
import styled from 'styled-components/native'

const Footer = () => {

    return (
        <TextContainer>
            <FooterText>Uplifting quotes created by Claire Caudwell for the Technigo Bootcamp 2020</FooterText>
        </TextContainer>
    ); 
};

const TextContainer = styled.View`
    align-items: center;
`;

const FooterText = styled.Text`
    font-size: 20px;
    color: #fff;
    text-align: center;
    background-color: rgb(236, 222, 95);
    padding: 20px;
    font-weight: 600;
`;

export default Footer;