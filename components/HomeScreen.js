import React from 'react'
import { Button } from 'react-native'
import {Container, ScreenWrapper, ButtonWrapper, ButtonImg, Title}from './Styles'


const HomeScreen = ({navigation}) => {
  return (
    <Container>
      <ScreenWrapper>
      <Title>Your personal book-shopping helper</Title>
      <ButtonWrapper>
      <ButtonImg source={require('../assets/images/bookshelf.jpg')} />
      <Button 
       title="TAP HERE TO SCAN ISBN"
       color="black"
       onPress={() => 
        navigation.navigate('Add books', {name: 'Add books'})  
      }
       accessibilityLabel="add books button"
       />
      </ButtonWrapper>
      </ScreenWrapper>
    </Container>
  )
}

export default HomeScreen