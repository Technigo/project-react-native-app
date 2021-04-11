import React from 'react'
import { Button } from 'react-native'
import styled from 'styled-components/native'

const HomeScreen = ({ navigation }) => {

  return (
    <Container>
      <Title >
        This is the home screen
      </Title>
      <Button title="Go to movie list" onPress={() => navigation.navigate('MovieList')}/>
    </Container>
  )
}

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
  padding: 24px 0;
`

const Title = styled.Text`
  font-family: 'Inter 400';
  font-weight:500;
  font-size: 24px;
  margin: 20px;
`

export default HomeScreen
