import React from 'react'
import { TouchableOpacity, Text } from 'react-native';
import styled from "styled-components"


const TodoItem = ({ pressHandeler, item }) => {


  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <Item>{item.text}</Item>
    </TouchableOpacity>

  )
}


const Item = styled.Text`
  paddingTop: 16;
   marginTop: 16;
    borderColor: #bbb;
    borderWidth: 1;
    borderStyle: "dashed";
    borderRadius: 10;
  
`

export default TodoItem