import React from "react";
import styled from "styled-components/native";

const TextContainer = styled.View`
  flex: 1;
`;

const Title = styled.Text`
  font-size: 24px;
  color: palevioletred;
  background: blue;
`;

const BigTitle = styled(Title)`
  font-size: 68px;
`;

const myText = "This is jonnas cool test!";

const StartText = () => {
  return (
    <TextContainer>
      <Title>{myText}</Title>
      <BigTitle>💅💅💅</BigTitle>
    </TextContainer>
  );
};

export default StartText;
