import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const HomeContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const TextContainer = styled.Text`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 50%;
  text-align: justify;
`

const Home = () => {

  return (
    <HomeContainer>
      <TextContainer>
        Welcome on my App!
        On here you can navigate through two types of Navigation.
        Simple stack-navigation and the drawer-navigation.
        Using the hamburger menu will open the drawer-navigation. The simple stack-navigation can be found in the Profile.
      </TextContainer>
    </HomeContainer>
  );
}

export default Home
