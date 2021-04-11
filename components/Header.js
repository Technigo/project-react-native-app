
import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native'


const Header = styled.View`
background-color: black;  
justify-content: center;
align-items: center;
width: 100%;
height: 400px;
margin-top: 100px;
padding: 15px; 
flex: 1;
`
const Title = styled.Text`
font-size: 20px;
color: white;
margin: 20px;
`

const HeaderFixed = () => {

  return (
      <Header>
        <Title>Random Dog Photos</Title>
      </Header>
  )}; 

export default HeaderFixed






