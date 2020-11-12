import React from 'react';
import styled from 'styled-components/native';

import Button from './Button';
import answers from '../data/answers.json';

const Container = styled.View`
  flex: 1;
  background-color: #6cb3ab;
  justify-content: center;
  align-items: center;
`;

const AnswerContainer = styled(Container)`
  flex: 2;
  width: 90%;
  background-color: #d4682e;
  border-radius: 50px;
  margin-top: 60px;
`;

const AnswerText = styled.Text`
  font-size: 24px;
  font-weight: 800;
  color: #263457;
  text-transform: uppercase;
  text-align: center;
`;

const randomSelector = (array) => {
  return array[Math.floor(Math.random() * array.length)].text;
};

const Answer = ({ onStartAgain }) => {
  return (
    <Container>
      <AnswerContainer>
        <AnswerText>{randomSelector(answers)}</AnswerText>
      </AnswerContainer>
      <Button onPress={onStartAgain} text="One more time!" />
    </Container>
  );
};

export default Answer;
