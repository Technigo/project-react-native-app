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
        <Emojis> 🌲 🌲 🌲 </Emojis>
        <InnerContainer>
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

const Emojis = styled.Text`
  text-align: center;
  font-size: 30px;
`;
