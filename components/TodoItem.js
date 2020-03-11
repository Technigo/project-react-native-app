import React from "react";
import { TouchableOpacity } from "react-native";
import { TimeStamp } from "./TimeStamp";
import styled from "styled-components";

const TodoItem = ({ pressHandler, item }) => {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <Item>{item.text}</Item>
      <TimeStamp></TimeStamp>
    </TouchableOpacity>
  );
};

const Item = styled.Text`
  padding-top: 16;
  margin-top: 16;
  border-color: #bbb;
  border-width: 1;
  border-style: dashed;
  border-radius: 10;
  height: 80;
`;

export default TodoItem;
