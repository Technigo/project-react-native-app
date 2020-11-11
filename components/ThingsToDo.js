import React, { useState } from "react";
import styled from "styled-components/native";
import { Text, View, Vibration, TouchableOpacity } from 'react-native';

const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

const PickButton = styled.TouchableOpacity`
  background-color: #e7c1b6;
  padding: 20px;
  border: 4px solid #466687;
  margin: 10px;
  width: 300px;
  border-radius: 5px;
`;
const ButtonText = styled.Text`
  text-align: center;
  justify-content: center;
  align-items: center;
  color: #466687;
`;

const ThingsToDoContainer = styled.View`
  padding: 40px;
  width: 300px;
  height: 160px;
  margin: 20px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

const ThingsToDoText = styled.Text`
  font-size: 20px;
  text-align: center;
  color: white;
`;

export const ThingsToDo = () => {
  // array of objects of things to do

  const ThingsToDoArray = [
    {
      thingtodo: "Baka kanelbullar",
      color: "#e7c1b6", //rosa
      emoji: "",
    },
    {
      thingtodo: "Ut och cykla",
      color: "#b9cab4", //grön
      emoji: "",
    },
    {
      thingtodo: "Se på film",
      color: "#f68b64", //orange
      emoji: "",
    },
    {
        thingtodo: "Spela Minecraft",
        color: "#1197d5", //blå
        emoji: "",
     },
      {
        thingtodo: "Ha på pyamas hela dagen!",
        color: "#9eff9a", //pigelingrön
        emoji: "",
      },
  ];

  // An randommaking function that gets invoked when button gets push.

    const [thingtodo, setThingToDo] = useState({});

  const getThingsToDo = () => {
    const theThingToDo =
      ThingsToDoArray[Math.floor(Math.random() * ThingsToDoArray.length)];
    setThingToDo(theThingToDo);
  };

  return (
    <Container>
      <ThingsToDoContainer style={{ backgroundColor: thingtodo.color }}>
        <ThingsToDoText>{thingtodo.thingtodo}</ThingsToDoText>
        <ThingsToDoText>{thingtodo.emoji}</ThingsToDoText>
      </ThingsToDoContainer>
      <PickButton
        onPress={() => {
          getThingsToDo();
          Vibration.vibrate();
        }}
      >
        <ButtonText>Välj något här</ButtonText>
      </PickButton>
    </Container>
  );
};
