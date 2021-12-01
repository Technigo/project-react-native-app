import React from 'react';

import styled from 'styled-components/native';
import { useSelector } from 'react-redux';

import { Buttons } from './Buttons';
import { Trail } from './Trail';

export const Main = () => {
  const currentPosition = useSelector((store) => store.trails.currentPosition);

  return (
    <>
      <Container>
        <InnerContainer>
          <Title>Are you in the mood for a hike?</Title>
          <Text>Please choose your area</Text>
          <Emojis>✨ 🥑 🌲 </Emojis>
          {currentPosition ? <Trail /> : <Buttons />}
        </InnerContainer>
      </Container>
    </>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: #d5e9d3;
  justify-content: center;
  align-items: center;
`;

const InnerContainer = styled.View`
  border: 3px dotted palevioletred;
  padding: 30px;
`;

const Title = styled.Text`
  font-size: 30px;
  text-align: center;
  color: #1e5f18;
`;

const Text = styled.Text`
  font-size: 15px;
  text-align: center;

  color: palevioletred;
`;

const Emojis = styled.Text`
  text-align: center;
  font-size: 30px;
`;
