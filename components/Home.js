import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'

import { MyCustomButton } from './MyCustomButton'
//import { SelectBreed } from './SelectBreed'




const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`


export const Home = ({navigation}) => {

  const pressHandler = () => {
    navigation.navigate('RandomCats')

  }

  return (
  <Container>
    <MyCustomButton text='Press for procrastination' onPress={pressHandler} />
   
  </Container>
  )
}

