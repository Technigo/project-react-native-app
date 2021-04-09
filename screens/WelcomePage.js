import React from 'react'
import styled from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'

import background1 from '../assets/background1.jpg'

const WelcomePage = () => {
  const navigation = useNavigation()
  return (
    <Container>
      <HomeImage source={background1}>
        <Logo>yummy</Logo>
        <Title>Welcome to Yummy!</Title>
        <Button onPress={() => navigation.navigate('Recipe Search')}>
          <Title>Search Recipe</Title>
        </Button>
        <Button onPress={() => navigation.navigate('Profile')}>
          <Title>Your Profile</Title>
        </Button>
      </HomeImage>
    </Container>
  )

}
export default WelcomePage

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #6e8c6c;
`
const HomeImage = styled.ImageBackground`
  flex:1;
  width:100%
  justify-content: center;
  align-items: center;
`
const Logo = styled.Text`
  font-size: 26px;
  color: #c47b34;
  font-style: italic;
  font-weight: bold;
  margin: 10px 10px 50px 10px;
  text-align: center;
  font-family: Georgia;
`

const Title = styled.Text`
  font-size: 24px;
  color: white;
  margin: 5px;
  text-align: center;
`
const Button = styled.TouchableOpacity`
  border: #6e8c6c 1px solid;
  width: 200px;  
  height: 50px;
  font-size: 16px;
  border-radius: 20px;
  padding: 1px;
  margin: 5px;
  justify-content: center;
  align-items:center;
  background: rgba(33, 32, 32, 0.3);
`