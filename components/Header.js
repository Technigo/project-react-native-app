import React from "react"
import styled from "styled-components/native"

const Header = () => {

    return (


        <HeaderContainer>
            <Title>My Todos!</Title>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.View`
background-color: coral;
align-items: center;
justify-content: center;
border-bottom-width: 20px;
border-bottom-color: #ddd;
`
const Title = styled.Text`
color: white;
font-size: 18px;
padding: 26px;
`

export default Header

