import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";

const HeaderBox = styled.View`
  flex:1;
  width:100%;

  background-color: #4F091D;
  justify-content: center;
  align-items: center;
`;


const HeaderTitle = styled.Text `
font-size: 62px;
text-align:left;
margin-left:8px;
margin-bottom:-25px;
color: #F5EEDC;
font-style: italic;




`




export const Header = () => {

    return (

<HeaderBox>
<HeaderTitle>How much have you been walking today???</HeaderTitle>

</HeaderBox>

    );



};

