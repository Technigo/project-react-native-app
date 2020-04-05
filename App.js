import React, { useState } from "react";
import styled from "styled-components/native";
import Header from "./components/Header";
import Fetch from "./components/Fetch";
import RandomBeer from "./components/RandomBeer";
import { View, TouchableOpacity, Button, Text } from "react-native";

const Container = styled.View`
  flex: 1;
  background-color: #fcfaf1;
  align-items: center;
`;

const StyledButton = styled.TouchableOpacity`
  background: #fcfcf7;
  width: 200px;
  margin: 30px 20px 15px 20px;
  padding: 10px;
  border: 2px solid #de9c3a;
  border-radius: 10px;
  align-self: center;

  shadow-opacity: 1;
  shadow-radius: 0px;
  shadow-color: #ab782c;
  shadow-offset: 4px 4px;
`;

const ButtonText = styled.Text`
  color: #a86913;
  font-size: 25px;
  font-weight: 500;
  text-align: center;
  box-shadow: 0px 0px #a38733;
`;

const App = () => {
  const [press, setPress] = useState(false);
  const [beer, setBeer] = useState();
  return (
    <Container>
      <Header
        title="🍻 IPA from API 🍻"
        titleTwo={`The #1 app for beer lovers`}
      />
      <StyledButton onPress={() => setPress(true)}>
        <ButtonText>Time for a 🍺?</ButtonText>
      </StyledButton>

      {press && <Fetch setBeer={setBeer} />}
      {beer && <RandomBeer beer={beer} setPress={setPress} />}
    </Container>
  );
};

export default App;
