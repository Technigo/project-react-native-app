import React from "react";

import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
`;

const Image = styled.Image`
  height: 250px;
  width: 250px;
  align-items: center;
  margin: 20px;
  margin-left: auto;
  margin-right: auto;
`;

const Text = styled.Text`
  font-size: 30px;
  color: black;
  text-align: center;
  margin: 10px;
`;
const HomeScreen = (navigation) => {
  return (
    <Container>
      <Text>Walking briskly, even for a minute, counts as exercise</Text>
      <Image source={require("../assets/run-img.png")} />
      <Text>Take your first step today to a healthy lifestyle</Text>
    </Container>
  );
};

export default HomeScreen;
