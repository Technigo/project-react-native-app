import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import styled from "styled-components";

const AddTodo = ({ submitHandler, text, setText }) => {
  // const [text, setText] = useState('');

  const changeHandler = value => {
    setText(value);
  };

  return (
    <View>
      <Input
        placeholder="add your new todo."
        onChangeText={changeHandler}
        value={text}
      />
      <Button
        color="coral"
        onPress={() => submitHandler(text)}
        title="add todo list!"
      />
    </View>
  );
};

const Input = styled.TextInput`
  margin-bottom: 10px;
  padding-horizontal: 8px;
  padding-vertical: 6px;
  border-bottom-width: 1px;
  border-bottom-color: #ddd;
`;

export default AddTodo;
