import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { ActivityIndicator, Button } from "react-native";

const fetchWYR = async () => {
  const res = await fetch("https://api.chucknorris.io/jokes/random");
  const json = await res.json();
  return json;
};

const App = () => {
  const [wouldYou, setWouldYou] = useState();

  useEffect(() => {
    fetchWYR().then(wouldYouData => {
      setWouldYou(wouldYouData);
    });
  }, []);

  return (
    <Container>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Title>{wouldYou && wouldYou.value}</Title>
      )}
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 24px;
  color: palevioletred;
`;

export default App;
