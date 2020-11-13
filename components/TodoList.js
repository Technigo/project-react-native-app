import React from "react";
import styled from "styled-components/native";
import { View, Text, TouchableOpacity } from "react-native";

const Touch = styled.TouchableOpacity`
  padding: 10px;
  margin-top: 15px;
  border-color: black;
  border-width: 5;
  border-radius: 25px;
  width: 100%;
`;

const TodoList = ({ item, pressHandler }) => {
  return (
    <Touch onPress={() => pressHandler(item.key)}>
      <Text>{item.text}</Text>
    </Touch>
  );
};

export default TodoList;
