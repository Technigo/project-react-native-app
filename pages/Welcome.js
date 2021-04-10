import React from 'react'
import styled from 'styled-components/native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Container = styled.View`
  flex:1;
  justify-content: flex-start;
  align-items-center;
  margin-top: 70px;
`

const Title = styled.Text`
  font-size: 36px;
  font-weight: bold;
  color: black;
  margin-bottom: 20px;
  text-align: center;
`

const IntroductionText = styled.Text`
  text-align: center;
  margin: 15px;
  font-size: 18px;
  font-weight: 500;
`

const ButtonContainer = styled.View`
  flex-direction: row;
  padding: 20px;
  justify-content: space-evenly;
`

const ButtonTouchableOpacity = styled.TouchableOpacity`
  padding: 10px;
  border-radius: 10px;
  background-color: pink;
`

const ButtonText = styled.Text`
  font-size: 20px;
  font-weight: 500;
`

const InitialScreenImage = styled.Image`
  margin: 0 auto;
  width: 80px;
  height: 80px;
  margin-bottom: 60px;
`

export const Welcome = ({ navigation }) => {
    return (
        <Container>
            <InitialScreenImage
              source={require('../assets/pawprint.png')}
            />
            <Title>
              Random Facts
            </Title>
            <IntroductionText>
              This App gives you random information about cats and dogs, because - why not?
            </IntroductionText>
            <ButtonContainer>
              <ButtonTouchableOpacity onPress={() => navigation.navigate('Cats')}>
                <ButtonText>CATS</ButtonText>
              </ButtonTouchableOpacity>
              <ButtonTouchableOpacity onPress={() => navigation.navigate('Dogs')}>
                <ButtonText>DOGS</ButtonText>
              </ButtonTouchableOpacity>
            </ButtonContainer>
        </Container>
    )
}