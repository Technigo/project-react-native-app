import React from 'react'
import styled from 'styled-components/native'

//import { Button } from 'react-native'

import { MyCustomButton } from './MyCustomButton'


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
          <MyCustomButton text='Press for Random Kitty' onPress={pressHandler} />
      </Container>
  )

}