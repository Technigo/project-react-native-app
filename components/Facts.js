import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Pressable,
} from "react-native";
import styled from "styled-components/native";

const FactContainer = styled.View`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const FactText = styled.Text`
  font-weight: 700;
  margin: 10px;
`;

const FactButton = styled.Pressable`
  width: 70px;
  padding: 5px;
  background-color: gray;
  text-align: center;
  border-radius: 20px;
  margin: 10px;
`;

export const Facts = () => {
  const [fact, setFact] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    generateFacts();
  }, []);

  const generateFacts = () => {
    setLoading(true);
    fetch("https://uselessfacts.jsph.pl/random.json?language=en")
      .then(response => response.json())
      .then(json => setFact(json))
      .finally(() => setLoading(false));
  };

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <FactContainer>
      <Text>Click button for some sweet facts yo!</Text>

      <FactButton key={fact.id} onPress={generateFacts}>
        <Text>Generate</Text>
      </FactButton>
      <FactText>Fact: {fact.text}</FactText>
      <Text>Source: {fact.source}</Text>
    </FactContainer>
  );
};
