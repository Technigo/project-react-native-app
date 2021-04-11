import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  display: flex;
  background-color: yellow;
  justify-content: center;
  align-items: center;
`;

const Question = styled.Text`
  color: magenta;
  font-size: 30;
  font-weight: 700;
  `;

const Message = styled.Text`
color: magenta;
font-size: 25;
`;

export const StartMessage = () => {
  return(
    <Container>
      <Question>
        What shall I wear today?
      </Question>
      <Message>
        Shake you phone to find out!
      </Message>
    </Container>
  )
}