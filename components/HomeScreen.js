import React from 'react'
import styled from 'styled-components/native';
import { Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';

const Container = styled.View`
	flex: 1;
	background-color: #FF7777;
`

const ScreenWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const ButtonWrapper = styled.View`
  width: 180px;
  height: 280px;
  background-color: white;
  margin-bottom: 20px;
  border-radius: 5px;
`

const Title = styled.Text`
	font-size: 40px;
	color: #fff;
  font-weight: 600;
  align-self: center;
`

const ButtonImg = styled.Image`
  width: 180px;
  height: 220px;
  align-self: center;
`

const HomeScreen = ({navigation}) => {
  return (
    <Container>
      <Title>My bookshelf</Title>
      <Title>2022</Title>
      <ScreenWrapper>
      <ButtonWrapper>
      <ButtonImg source={require('../assets/images/add-books.jpg')} />
      <Button 
       title="ADD BOOKS"
       color="black"
       onPress={() => 
        navigation.navigate('Add books', {name: 'Add books'})  
      }
       accessibilityLabel="add books button"
       />
      </ButtonWrapper>
      <ButtonWrapper>
      <ButtonImg source={require('../assets/images/bookshelf.jpg')} />
      <Button 
       title="BOOKSHELF"
       color="black"
       onPress={() => 
        navigation.navigate('BookDetail', {name: 'BookDetail'})  
      }
       accessibilityLabel="go to bookshelf button"
       />
      </ButtonWrapper>
      </ScreenWrapper>
    </Container>
  )
}

export default HomeScreen