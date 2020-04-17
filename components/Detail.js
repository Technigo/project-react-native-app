import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  background-color: honeydew;
  justify-content: center;
  align-items: center;
`;
const Title = styled.Text`
  font-size: 30px;
  font-family: "Inter-Black";
  color: whitesmoke;
  margin: 0px 5px 15px 5px;
  padding: 6px;
  background-color: palevioletred;
  border: 0px solid black;
  border-radius: 10px;
`;
const InterTitle = styled.Text`
  font-size: 24px;
  font-family: "Inter-Black";
  color: palevioletred;
  margin: 0px 5px 15px 5px;
`;
const ItalicText = styled.Text`
  font-size: 20px;
  font-family: "Arial";
  font-style: italic;
  color: palevioletred;
  margin-top: 20px;
  max-width: 90%;
  text-align: center;
`;
const RoundedImageWrapper = styled.View`
  width: 300px;
  height: 80px;
  margin-top: 20px;
`;
const RoundedImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
  border-top-left-radius: 27px;
  border-top-right-radius: 27px;
  border-bottom-left-radius: 27px;
  border-bottom-right-radius: 27px;
  overflow: hidden;
`;

export const Detail = ({ route }) => {
  const { house } = route.params;
  return (
    <Container>
      <Title>Details about:</Title>
      <InterTitle>{house.name}</InterTitle>
      <InterTitle>Region: {house.region}</InterTitle>
      <ItalicText>{house.coatOfArms}</ItalicText>
      <RoundedImageWrapper>
        <RoundedImage
          source={{
            uri: "https://media.giphy.com/media/3o72FieLG07hheBu0M/giphy.gif",
          }}
        />
      </RoundedImageWrapper>
    </Container>
  );
};
