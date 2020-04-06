import React from "react";
import styled from "styled-components/native";

export const StyledButton = ({ buttonText, pressValue, fontColor, width }) => {
  const StyledButton = styled.TouchableOpacity`
    background: #fcfcf7;
    width: ${width ? width : "210px"};
    padding: 10px;
    margin: 0 10px;
    border: 2px solid #de9c3a;
    border-radius: 10px;
    align-self: center;

    shadow-opacity: 1;
    shadow-radius: 0px;
    shadow-color: #ab782c;
    shadow-offset: 4px 4px;

    border-top-left-radius: 5px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 5px;
  `;

  const ButtonText = styled.Text`
    color: ${fontColor ? fontColor : "#a86913"};
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    box-shadow: 0px 0px #a38733;
  `;

  return (
    <StyledButton onPress={pressValue}>
      <ButtonText>{buttonText}</ButtonText>
    </StyledButton>
  );
};
