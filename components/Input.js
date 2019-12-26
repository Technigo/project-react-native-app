import React, { useState } from "react";
import styled from "styled-components/native";
import { Text, Button, ScrollView, Image, View } from "react-native";

export const Input = ({ addText, searchText, setSearchText }) => {
  const inputHandler = enteredText => {
    setSearchText(enteredText);
  };

  return (
    <Container row>
      <InputField
        placeholder="Search"
        onChangeText={inputHandler}
        value={searchText}
      />
      <ButtonSearch onPress={addText} disabled={!searchText}>
        <Title>SEARCH</Title>
      </ButtonSearch>
    </Container>
  );
};

const Container = styled.View`
  flex-direction: ${props => (props.row ? "row" : "column")};
  background-color: #000;
  height: ${props => (props.full ? "100%" : "auto")};
  align-self: center;
  width: 100%;
`;

const InputField = styled.TextInput`
  border-color: #00bfff;
  background-color: white;
  border-width: 1px;
  width: 70%;
  height: 30;
  padding-left: 0;
`;

const ButtonSearch = styled.TouchableOpacity`
  color: black;
  width: 30%;
  height: 30;
  background-color: #00bfff;
`;

const Title = styled.Text`
  color: #fff;
  margin: auto auto;
`;

export default Input;
