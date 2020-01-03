import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { ActivityIndicator, Button } from "react-native";

const fetchChuck = async () => {
  const res = await fetch("https://api.chucknorris.io/jokes/random");
  const json = await res.json();
  return json;
};

const App = () => {
  const [chuckState, setChuckState] = useState();
  const [loading, setLoading] = useState(true);

  const fetchChuckData = () => {
    setLoading(true);
    fetchChuck().then(chuckData => {
      setChuckState(chuckData);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchChuckData();
  }, []);

  return (
    <Container>
      {loading ? (
        <ActivityIndicator size="large" color="#999" />
      ) : (
        <Title>{chuckState && chuckState.value}</Title>
      )}

      <Buttun onPress={fetchChuckData}>
        <ButtonText>more chuck!</ButtonText>
      </Buttun>
    </Container>
  );
};

const Buttun = styled.TouchableOpacity`
  position: absolute;
  background: white;
  padding: 10px 20px;
  bottom: 40;
  border-radius: 10;
`;

const ButtonText = styled.Text`
  font-size: 25px;
`;

const Container = styled.View`
  flex: 1;
  background-color: black;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 24px;
  color: white;
`;

export default App;
