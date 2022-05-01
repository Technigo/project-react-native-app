import React from "react";
import styled from "styled-components";

const TagPressable = ({ url, title, index, onPress, isSelected }) => {
  return (
    <PressableTag isSelected={isSelected} onPress={() => onPress(url, index)}>
      <TagTitle isSelected={isSelected}>{title}</TagTitle>
    </PressableTag>
  );
};

export default TagPressable;

const PressableTag = styled.Pressable`
  margin: 4px;
  padding: 8px;
  background-color: ${(props) => (props.isSelected ? "rgb(6,41,97)" : "rgb(208,223,236)")};
`;

const TagTitle = styled.Text`
  color: ${(props) => (props.isSelected ? "white" : "rgb(6,41,97)")};
  font-family: "Verdana";
`;
