import React from "react";
import styled from "styled-components/native";
import { View, Text, TouchableOpacity } from "react-native";

const Touch = styled.TouchableOpacity`
  padding: 0.5em;
  margin-top: 16;
  border-color: blue;
  border-width: 1;
  border-radius: 10;
`;

const TodoList = ({ item, pressHandler }) => {
  return (
    <Touch onPress={() => pressHandler(item.key)}>
      <Text>{item.text}</Text>
    </Touch>
  );
};

export default TodoList;
