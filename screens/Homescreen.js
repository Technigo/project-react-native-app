import React from 'react'
import styled from 'styled-components/native'

const HomeContainer = styled.View`
  flex: 1;
  padding: 15px;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: black;
`

const MainHeading = styled.Text`
  font-size: 27px;
  color: white;
  margin-bottom: 20px;
  font-weight: 800;
  text-align: center;
`

const SubHeading = styled.Text`
  font-size: 16px;
  color: white;
  margin-bottom: 30px;
`

const MyButton = styled.TouchableOpacity`
  width: 150px;
  padding: 10px;
  margin: 10px;
  border: 1px solid white;
`

const ButtonText = styled.Text`
  text-align: center;
  font-weight: bold;
  color: white;
`


export const Homescreen = ({ navigation }) => {
  return (
  <HomeContainer>
    <MainHeading>You want to watch a movie?</MainHeading>
    <SubHeading>Here are some lists to browse!</SubHeading>
      <MyButton onPress={() => navigation.navigate('Popular')}>
       <ButtonText>Popular Movies</ButtonText>
      </MyButton>
      <MyButton onPress={() => navigation.navigate('TopRated')}>
       <ButtonText>Top Rated Movies</ButtonText>
      </MyButton>
      <MyButton onPress={() => navigation.navigate('Upcoming')}>
       <ButtonText>Upcoming Movies</ButtonText>
      </MyButton>
  </HomeContainer>
  )
}

