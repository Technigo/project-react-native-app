import React from 'react'
import styled from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'

const WelcomePage = () => {
  const navigation= useNavigation()
  return (
    <Container>
      <Title>Welcome</Title>
      <Button onPress={() => navigation.navigate('Recipe Search')}>
        <Title>Search Recipe</Title>
      </Button>
      <Button onPress={() => navigation.navigate('Profile')}>
        <Title>Your Profile</Title>
      </Button>
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

const Title = styled.Text`
  font-size: 24px;
  color: black;
  margin: 5px;
  text-align: center;
`
const Button = styled.TouchableOpacity`
  border: white 1px solid;
  width: 250px;  
  height: 50px;
  font-size: 16px;
  border-radius: 20px;
  padding: 1px;
  margin: 5px;
  justify-content: center;
  align-items:center;
  background: rgba(33, 32, 32, 0.3);
`