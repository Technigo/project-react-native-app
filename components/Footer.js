import React from 'react'
import styled from 'styled-components/native'
import { AppLoading } from 'expo'
import { useFonts } from '@expo-google-fonts/rubik'



const FooterView = styled.View`
    display: flex;
    flex-direction: column;
    margin: 0 0 20px 0;
    height: 60px;
`

const FooterText = styled.Text`
    text-align: center;
    font-family: 'Rubik;
    font-size: 16px;
    color: #ff9c2a;
`

export const Footer = () => {
    const [fontLoaded] = useFonts({
        'Rubik-VariableFont_wght': require('../assets/fonts/Rubik-VariableFont_wght.ttf')
      })

    if (!fontLoaded){
        return <AppLoading />
    } else {
        return(
            <FooterView>
                <FooterText>Anna Lindgren - Technigo Bootcamp 2021</FooterText>
            </FooterView>
        )
    }
}