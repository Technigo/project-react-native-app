import React, { useEffect, useState } from "react";
import { Accelerometer } from "expo-sensors";
import styled from "styled-components/native";
import { useIsShaking } from "./utils/utils";

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

const App = () => {
  const [quote, setQuote] = useState("");
  const isShaking = useIsShaking();

  useEffect(() => {
    async function getRandomQuote() {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      setQuote(`${data.content} —${data.author}`);
    }
    getRandomQuote();
  }, [isShaking]);

  return (
    <Container>
      <Title>{quote}</Title>
    </Container>
  );
};

export default App;
