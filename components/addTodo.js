import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import styled from "styled-components/native"


const AddTodo = ({ submitHandler }) => {
  const [text, setText] = useState('');

  const changeHandler = (value) => {
    setText(value);
  };

  return (
    <View>
      <Input
        style={styles.input}
        placeholder='add your new todo.'
        onChangeText={changeHandler}
        value={text}
      />
      <Button color='coral' onPress={() => submitHandler(text)} title='add todo list!' />
    </View>
  );
}

const Input = styled.TextInput`
  margin-Bottom: 10,
    padding-Horizontal: 8,
    padding-Vertical: 6,
    border-Bottom-Width: 1,
    border-Bottom-Color: '#ddd',
`

export default AddTodo