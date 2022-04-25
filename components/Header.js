import React from "react"
import styled from "styled-components/native"

export default function Header(props) {
    return ( 
    <HeaderStyling>{props.title}</HeaderStyling>
    )
}


const HeaderStyling = styled.Text`
        font-size: 40;
        text-align: center;
        width: "100%";
        background-color: "white";
        justify-content: "center";
        align-items: "center";
`