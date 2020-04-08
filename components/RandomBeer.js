import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components";
import { OpenURLButton } from "./OpenURLButton";

const StyledView = styled.View`
  flex: 1;
  background-color: #fdf2d6;
  align-content: center;
  justify-content: center;
  border: 2px solid black;
  margin: 20px;
  padding: 20px;
  border: 2px solid #ab782c;

  border-top-left-radius: 5px;
  border-top-right-radius: 30px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 5px;

  shadow-opacity: 1;
  shadow-radius: 0px;
  shadow-color: #6e4d1b;
  shadow-offset: 4px 4px;
`;

const StyledText = styled.Text`
  font-size: 20px;
  color: #99541c;
`;

const Span = styled(StyledText)`
  font-weight: 700;
  margin: 10px 0;
`;

const StyledEmoji = styled.Text`
  text-align: center;
  font-size: 40px;
  padding: 8px 0;
`;

export const RandomBeer = ({ beer, press, setPress }) => {
  return (
    <StyledView>
      <ScrollView>
        <StyledText>
          <Span>NAME: </Span>
          {beer.name !== undefined ? beer.name : "Name not avilable"}
        </StyledText>
        <StyledText>
          <Span>ABV:</Span> {beer.abv}
          <Span>%</Span>
        </StyledText>
        <StyledText>
          <Span>STYLE:</Span>{" "}
          {beer.style.shortName !== undefined
            ? beer.style.shortName
            : "Style not avilable"}
        </StyledText>
        <StyledEmoji>🍻🍻🍻</StyledEmoji>
        <StyledText>
          <Span>DESCRIPTION:</Span>{" "}
          {beer.style.description !== undefined
            ? beer.style.description
            : "Style not avilable"}
        </StyledText>
      </ScrollView>
      {beer.style.shortName !== undefined && (
        <OpenURLButton
          url={`http://www.systembolaget.se/sok-dryck/?searchquery=${beer.style.shortName}`}
          buttonText={`Click for more`}
        />
      )}
      {setPress(false)}
    </StyledView>
  );
};
