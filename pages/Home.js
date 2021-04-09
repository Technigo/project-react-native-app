import React from "react";
import styled from "styled-components/native";
import { useWindowDimensions } from "react-native";

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
  const dimensions=useWindowDimensions();
  return (
    <Wrapper>
      <Title>MARVEL</Title>
      {dimensions.width >= 768 ? <></> : <Button title="Show Menu" onPress={() => navigation.toggleDrawer()} />}
    </Wrapper>
  );
};
