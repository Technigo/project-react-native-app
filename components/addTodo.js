import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import styled from "styled-components"


const AddTodo = ({ submitHandler, text, setText }) => {
  // const [text, setText] = useState('');

  const changeHandler = (value) => {
    setText(value);
  };

  return (
    <View>
      <Input
        placeholder='add your new todo.'
        onChangeText={changeHandler}
        value={text}
      />
      <Button color='coral' onPress={() => submitHandler(text)} title='add todo list!' />
    </View>
  );
}

const Input = styled.TextInput`
  marginBottom: 10px;
    paddingHorizontal: 8px;
    paddingVertical: 6px;
    borderBottomWidth: 1px;
    borderBottomColor: #ddd;
`

export default AddTodo