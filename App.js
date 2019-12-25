import React from "react";
import styled from "styled-components/native";
import { Text, Button, View, Image } from "react-native";

import { Header } from "./components/Header";
import { BooksList } from "./components/BooksList";

const App = () => {
  return (
    <Container>
      <Header title="BOOKIFY" />
      <BooksList />
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

// const List = styled.FlatList`
//   flex: 3;
//   background-color: papayawhip;
//   align-self: center;
//   width: 100%;
// `;

const Title = styled.Text`
  font-size: 14px;
  color: palevioletred;

  width: 100%;
  margin: 0 auto;

  height: 20;
`;

// const Input = styled.TextInput`
//   border-color: black;
//   border-width: 1px;
//   width: 80%;
//   height: 30;
//   flex: 1;
// `;

// const ButtonPress = styled.Button`
//   margin: 0;
// `;

export default App;
