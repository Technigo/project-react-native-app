import React from "react";
import styled from "styled-components/native";

const Logo = styled.Text`
    font-size: 22px;
    margin: 40px 40px 0 30px;
    width: 200px;
    letter-spacing: 2px;
    align-self: flex-start;
`

const Header = () => {
    return (
        <Logo style={{fontFamily:'Bulj'}}> Helsinki .</Logo>
    )
}

export default Header