import React from "react";
import styled from "styled-components/native";
import { Text, TouchableOpacity } from "react-native";

const ButtonContainer = styled.TouchableOpacity`
  width: 80px;
  height: 80px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background-color: rgba(0, 0, 0, 0.4);
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
`;

const ChangeImage = ({
  text,
  setImgNumber,
  setQuery,
  query,
  newQuery,
  random,
}) => {
  const handleOnPress = () => {
    if (query === newQuery) {
      setImgNumber(random(100));
    } else {
      setQuery(newQuery);
    }
  };

  return (
    <ButtonContainer onPress={handleOnPress}>
      <ButtonText>{text}</ButtonText>
    </ButtonContainer>
  );
};

export default ChangeImage;
