import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  ImageBackground,
  StyleSheet,
} from "react-native";
import styled from "styled-components/native";

const image = {
  uri: "https://images.unsplash.com/photo-1569982175971-d92b01cf8694?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
  },
});

const Body = styled.View`
  height: 100%;
`;

const FactContainer = styled.View`
  width: 70%;
  padding-top: 50px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 0.3);
  border: 1px solid #161616;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  position: relative;
`;

const FactText = styled.Text`
  font-weight: 700;
  margin: 10px;
  width: 80%;
  text-align: center;
`;

const Source = styled.Text`
  padding-bottom: 20px;
`;

const FactButton = styled.TouchableOpacity`
  width: 80px;
  padding: 5px;
  background-color: white;
  text-transform: uppercase;
  text-align: center;
  align-items: center;
  border-radius: 20px;
  margin: 10px;
  border: 1px solid #161616;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
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
    <Body>
      <ImageBackground source={image} style={styles.background}>
        <FactContainer>
          <Text>Click button for some sweet facts yo!</Text>
          <FactButton key={fact.id} onPress={generateFacts}>
            <Text>Generate</Text>
          </FactButton>
          <FactText>Fact: {fact.text}</FactText>
          <Source>Source: {fact.source}</Source>
        </FactContainer>
      </ImageBackground>
    </Body>
  );
};
