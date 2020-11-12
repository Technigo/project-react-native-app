import React, { useState } from "react";
import styled from "styled-components/native";
import { Text, Button } from "react-native";

const ButtonContainer = styled.View`
  background-color: white;
  width: 100px;
  height: 100px;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
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
    setImgNumber(random(100));
    setQuery(newQuery);
  };

  return (
    <>
      <ButtonContainer>
        <Button title={text} onPress={handleOnPress} />
      </ButtonContainer>
    </>
  );
};

export default ChangeImage;
