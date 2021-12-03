import React from "react";
import {
  Pressable,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import styled from "styled-components/native";

const ButtonText = styled.Text`
  font-size: 16px;
  font-family: "SWFontHollow";
  color: ${(props) => props.theme.colors.textYellow};
  line-height: 21;
  padding: 5px;
`;

const ButtonYellow = styled.TouchableOpacity`
  border: 1px solid #ffe81f;
  border-radius: 5px;
  width: max-content;
`;

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    borderColor: "#FFE81F",
    elevation: 3,
    backgroundColor: "black",
    borderColor: "#FFE81F",
    borderWidth: 1,
    width: 150,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "#FFE81F",
    fontFamily: "SWFontHollow",
  },
});

const CategoryButton = ({ buttonText, onPressed }) => {
  return (
    <ButtonYellow onPress={() => onPressed(buttonText)}>
      <ButtonText>{buttonText}</ButtonText>
    </ButtonYellow>
  );
};

export default CategoryButton;
