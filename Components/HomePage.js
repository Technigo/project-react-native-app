import React from 'react';

import CinemaBackground from '../assets/cinema-s.jpg';
import { HomeContainer, HomeButton, Title } from '../styled-components/styles';

const HomePage = ({ navigation }) => {
  return (
    <HomeContainer source={CinemaBackground}>
      <HomeButton onPress= {() => navigation.navigate('Now playing')}>
        <Title>Movies now playing</Title>
      </HomeButton>
    </HomeContainer>
  );
};
export default HomePage;