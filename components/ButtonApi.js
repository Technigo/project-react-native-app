import React, { useState } from "react";
import { Text, View, Button } from "react-native";
import styled from "styled-components/native";

const QuoteText = styled.Text`
  font-weight: 700;
`;

const ApiButton = styled.TouchableHighlight`
  width: 50%;
  background-color: green;
`;

const ButtonApi = () => {
  const [art, setArt] = useState({});

  const generateArt = () => {
    fetch("https://api.artic.edu/api/v1/artworks")
      .then((res) => res.json())
      .then((data) => setArt(data));
  };

  return (
    <View>
      <Text>Click on the button! </Text>
      <Button title="click!" onPress={generateArt} />
      <Text> Art:{art.title}</Text>
    </View>
  );
};

export default ButtonApi;
