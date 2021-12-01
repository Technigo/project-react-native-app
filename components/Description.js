import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  width: fit-content;
  padding: 10px;
  border: 1px solid black;
  border-radius: 30px;
  background-color: white;
  text-align: center;
  margin-bottom: 10px;
`;

const Description = () => {
  return (
    <Container>
      <Text>Shake to get Ron's advice</Text>
    </Container>
  );
};

export default Description;
