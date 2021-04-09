import React from "react";
import styled from "styled-components/native";

const Wrapper = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  background-color: black;
`;

const Title = styled.Text`
  color: red;
  font-weight: bold;
  font-size: 24px;
  margin: 10px;
`;

const Button = styled.Button``;

export const Home = ({ navigation }) => {
  return (
    <Wrapper>
      <Title>HOME</Title>
      <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
    </Wrapper>
  );
};
