import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const HomeContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Home = () => {

  return (
    <HomeContainer>
      <Text>Welcome on my non-sense App!</Text>
      <Text>Are you wondering what the hack you are doing here? Well I'm wondering that too.</Text>
      <Text>But since you're here you might as well check out some React Native Stuff I did.</Text>
    </HomeContainer>
  );
}

export default Home
