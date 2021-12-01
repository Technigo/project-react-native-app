import React from "react"
import { View, Text, Image } from "react-native"
import styled from 'styled-components/native'

const HomeContainer = styled.View`
    height: 100%;
    width: 100%;
    background-color: pink;
`
const HeaderText = styled.Text`
    font-weight: 700;
`


const Home = (props) => {

    return (
        <HomeContainer>
            <HeaderText>{props.headerTitle}</HeaderText>
        </HomeContainer>
    )
}

export default Home