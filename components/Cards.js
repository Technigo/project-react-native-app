import React from "react";
import { useSelector } from "react-redux";
// Core components
import { View, Text, Image, ScrollView } from "react-native";
import styled from "styled-components/native";

// Styled components
const Wrapper = styled.View`
border:15px solid black;
`;

const Picture = styled.Image`
  width: 100%;
  height: 400px;
`;

const TextContainer = styled.View`
  background-color: #ffca03;
`;

const Name = styled.Text`
  color: #ff5403;
  font-weight: 700;
  font-size: 20px;
  text-align: center;
  padding: 10px 0 5px;
`;

const Info = styled.Text`
  color: #ff5403;
  font-size: 18px;
  text-align: center;
  padding: 5px;
`;

const Date = styled.Text`
  color: #ff5403;
  font-size: 18px;
  text-align: center;
  padding: 5px 0 20px;
`;

const Cards = () => {
  const harryPotterApi = useSelector((store) => store.potter.harryPotterApi);
  return (
    <ScrollView>
      {harryPotterApi.slice(0, 9).map((item) => {
        return (
          <Wrapper key={item.name}>
            <TextContainer>
              <Name>{item.name}</Name>
              <Info>House: {item.house}</Info>
              <Info>Ancestry: {item.ancestry}</Info>
              <Info>Patronus: {item.patronus}</Info>
              <Date>Date of birth: {item.dateOfBirth}</Date>
            </TextContainer>

            <Picture source={{ uri: item.image }} />
          </Wrapper>
        );
      })}
    </ScrollView>
  );
};
export default Cards;
