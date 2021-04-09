import React from 'react'
import styled from 'styled-components/native'

const FooterView = styled.View`
    flex: 10;
    justify-content: flex-end;
    align-items: center;
    padding: 20px;
    padding-bottom: 40px;
`;

const FooterText = styled.Text`
    justify-content: center;
    align-items: center;
    color: #767876;
`;


export const Footer = () => {
    return (
        <FooterView>
            <FooterText>Popcorn Pictures by Aldis Ellertsdottir</FooterText>
            <FooterText>App made by Ylva Landoff Lindberg</FooterText>  
        </FooterView>
    );
};