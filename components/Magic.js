import React, { useState } from "react";
import { Text, View, Image, Button, Alert } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  background-color: #770055;
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

const Magic = () => {
  const [newMeaning, setNewMeaning] = useState("");
  const meaning = [
    "That was the most stupid question ever!",
    "Please ask someone else",
    "YES",
    "NO",
    "I here you",
    "That is a god question",
    "wondering the same!",
    "Maybe",
    "When the stars is Shining bright",
    "If you like to",
    "Cannot predict now.",
    "Ask again later.",
    "Oooh I need to think on that one!",
    "You only live ones",
    "No regrets",
    "YOLO",
    "absolutely not!",
    "Yes, no, absolutely",
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

export default Magic;
