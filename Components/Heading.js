import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import styled from "styled-components/native"

const Title = styled.Text`
text-align: center;
color: black;
font-size: 48px;
padding 20px;
text-shadow: 2px 2px white;
`;

const HeaderBox = styled.View`
background-color: #fff;
width: 250px;
display: flex;
align-items: center;
margin: 15px auto;
border-radius: 15px;
opacity: 0.5;
`



const Heading =() => {
    return (
    <HeaderBox>
        <Title>Nature App</Title>
    </HeaderBox>
          
    );
  }
  export default Heading