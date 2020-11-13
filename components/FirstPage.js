import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 0.5;
  justify-content: center;
  align-items: center;
`;
const Title = styled.Text`
  font-size: 27px;
  color: #fff3e2;
  text-align: center;
  margin: 0 25px;
`;
const HatImage = styled.Image`
  width: 250px;
  height: 200px;
  margin: 50px 0;
`;
export const Firstpage = () => {


  return (
    <Container>
      <Title> It is time for the sorting ceremony!</Title>
      <HatImage
        style={styled.Image}
        source={require("../assets/sortinghat.png")}
      />
      <Title> Shake me to find out which house you belong to </Title>
    </Container>
  );
};
