import React from "react";
import styled from "styled-components/native";

const ButtonText = styled.Text`
  font-size: 24px;
  font-family: "SWFont";
  color: ${(props) => props.theme.colors.textYellow};
  line-height: 21px;
  padding: 5px;
`;

const ButtonYellow = styled.TouchableOpacity`
  border: 1px solid #ffe81f;
  border-radius: 5px;
  width: 170px;
  align-items: center;
  margin: 15px;
`;

const CategoryButton = ({ buttonText, onPressed }) => {
  return (
    <ButtonYellow onPress={() => onPressed(buttonText)}>
      <ButtonText>{buttonText}</ButtonText>
    </ButtonYellow>
  );
};

export default CategoryButton;
