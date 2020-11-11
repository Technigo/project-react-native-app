import React, { useEffect } from 'react'

import styled from 'styled-components/native'
import { Text } from 'react-native';


import CinemaBackground from '../assets/cinema.jpg'

const HomePage = ({navigation}) => {

  //to remove the "header" on the home page"
  useEffect(() => {
    navigation.setOptions({ headerShown: false})
  }, [])

  return (
    <HomeContainer source={CinemaBackground}>
      <Button onPress= {() => navigation.navigate('Lottie')}>
              <Text>ANIMATION</Text>
            </Button>
      <Button onPress= {() => navigation.navigate('Now playing')}>
        <HomePageText>Movies now playing</HomePageText>
      </Button>

    </HomeContainer>
  )
}
export default HomePage

const HomeContainer = styled.ImageBackground `
  flex: 1;
  justify-content: flex-end;
`
const Button = styled.TouchableOpacity `
  padding: 10px;
  margin-bottom: 40%;
  width: 90%;
  border-radius: 10px;
  align-self: center; 
  align-items: center; 
  background-color: rgba(0,0,0,0.6);
`
const HomePageText = styled.Text `
  color: #FAF8F0;
  font-size: 18px;
  font-weight: bold;
`
