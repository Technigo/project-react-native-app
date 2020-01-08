import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import styled from "styled-components/native"


const TodoItem = ({ pressHandeler, item }) => {


  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <Item>{item.text}</Item>
    </TouchableOpacity>

  )
}


const Item = styled.Text`
  padding: 16;
    margin-Top: 16;
    border-Color: '#bbb';
    border-Width: 1;
    border-Style: "dashed";
    border-Radius: 1;
    border-Radius: 10;
  
`

export default TodoItem