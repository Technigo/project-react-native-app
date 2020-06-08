import React from 'react'
import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native'


const Title = styled.Text`
  font-size: 24px;
  padding: 16px;
  marginTop: 16px;
  borderColor: grey;
  background-color: white;
  borderWidth: 1px;
  borderRadius: 10px;
  text-align: center;
`
export const ToDoItems = ({ item, pressHandler }) => {
  return (
  <TouchableOpacity onPress = {() => pressHandler(item.key)}>
    <Title>{item.text}</Title>
  </TouchableOpacity>
  );
};
