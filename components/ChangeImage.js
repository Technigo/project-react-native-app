import React, { useState } from "react";
import styled from "styled-components/native";
import { StyleSheet, Text, Button } from "react-native";

const Buttons = styled.View`
  flex-direction: row;
`;

const ButtonContainer = styled.View`
  background-color: rgba(0, 0, 0, 0.4);
  width: 80px;
  height: 80px;
  color: red;
  justify-content: center;
  border-radius: 50px;
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
    <Buttons>
      <ButtonContainer>
        <Button style={styles.button} title={text} onPress={handleOnPress} />
      </ButtonContainer>
    </Buttons>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "pink",
    color: "green",
  },
});

export default ChangeImage;
