import React from "react";
import { View, Text } from "react-native";
import moment from "moment";
import styled from "styled-components";

export const TimeStamp = ({ Date }) => {
  const date = new Date().getDate(); //Current Date

  return (
    <View>
      <Date>{date}</Date>
    </View>
  );
};

const Date = styled.Text`
  padding-top: 16;
  margin-top: 16;
  border-color: #bbb;
  border-width: 1;
  border-style: dashed;
  border-radius: 10;
  height: 80;
`;

export default TodoItem;
