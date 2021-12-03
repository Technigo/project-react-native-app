import React, { useState } from "react";
import { Text, View, Image, Button, Alert } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  background-color: #f5425d;
  align-items: center;
`;

const ShowButton = styled.Button``;

const AnswerText = styled.Text``;

const BallContainer = styled.View`
  height: 300px;
  width: 300px;
  align-items: center;
  margin: 100px;
  background-color: black;
  justify-content: center;
  border-radius: 500px;
`;
const Content = styled.View`
  width: 55%;
  height: 55%;
  background-color: white;
  border-radius: 500px;
  align-items: center;
  justify-content: center;
`;
const Answer = styled.Text`
  font-size: 12px;
  margin: 5px;
  color: black;
`;

const Number = styled.Text`
  font-size: 70px;
`;

const Grandma = () => {
  const [newMeaning, setNewMeaning] = useState("");
  const meaning = [
    "Be careful my dear",
    "it was better before",
    "If you asking me zzzzzzzzz",
    "it is not your fault dear",
    "When you are in my age you will have the answer",
    "Can you ask me again, I forgot",
  ];
  const showMeaning = () => {
    setNewMeaning(meaning[Math.floor(Math.random() * meaning.length)]);
    setTimeout(() => {
      setNewMeaning("");
    }, 3000);
  };

  return (
    <Container>
      <Button title="Press me" onPress={() => showMeaning()} />
      <BallContainer>
        <Content>
          <Answer>{!newMeaning ? <Number>8</Number> : newMeaning}</Answer>
        </Content>
      </BallContainer>
    </Container>
  );
};

export default Grandma;
