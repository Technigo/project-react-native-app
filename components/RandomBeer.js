import React, { useState, useEffect } from "react";
import { Text, View, ScrollView } from "react-native";
import styled from "styled-components";

export default function RandomBeer({ beer, setPress }) {
  return (
    <StyledView>
      <ScrollView>
        <StyledText>
          <Span>NAME: </Span>
          {beer.name !== undefined ? beer.name : "Name not avilable"}

          {/* {beer.name} */}
        </StyledText>
        <StyledText>
          <Span>ABV:</Span> {beer.abv}
          <Span>%</Span>
        </StyledText>
        <StyledText>
          <Span>STYLE:</Span> {beer.style.name}
        </StyledText>
        <StyledEmoji>🍻🍻🍻</StyledEmoji>
        <StyledText>
          <Span>DESCRIPTION:</Span>{" "}
          {beer.style.description !== undefined
            ? beer.style.description
            : "Style not avilable"}
        </StyledText>
      </ScrollView>
      {setPress(false)}
    </StyledView>
  );
}

const StyledView = styled.View`
  flex: 1;
  background-color: #fdf2d6;
  align-content: center;
  justify-content: center;
  border: 2px solid black;
  margin: 15px 20px 30px;
  padding: 20px;
  border: 2px solid #ab782c;
  border-radius: 10px;

  shadow-opacity: 1;
  shadow-radius: 0px;
  shadow-color: #6e4d1b;
  shadow-offset: 4px 4px;
`;

const Span = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: #99541c;
  margin: 10px 0;
`;

const StyledText = styled.Text`
  font-size: 20px;
  color: #99541c;
`;

const StyledEmoji = styled.Text`
  text-align: center;
  font-size: 40px;
  padding: 8px 0;
`;
