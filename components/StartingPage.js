import React from "react";
import styled from "styled-components/native";

const Title = styled.Text`
  font-size: 24px;
  font-family: "SWFont";
  color: ${(props) => props.theme.colors.textYellow};
`;

const StartingPage = () => {
  return (
    <Title>Hello there. What do you want to know more about?</Title>
  );
};

export default StartingPage;
