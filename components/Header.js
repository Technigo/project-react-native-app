import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styled from "styled-components/native"


const Header = () => {
  return (
    <HeaderTop>
      <Title>
        My Todos
        </Title>
    </HeaderTop>
  )
}

const HeaderTop = styled.Header`
  height: 80,
  padding-Top: 38,
  background-Color: 'coral',
  
`
const Title = styled.Text`
  text-Align: 'center',
  color: '#fff',
  font-Size: 20,
  font-Weight: 'bold',
  
`

export default Header