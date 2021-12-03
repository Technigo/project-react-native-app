import React, { useState } from 'react';
import { TextInput, Button, View } from 'react-native';

import styled from 'styled-components/native';

const InputField = styled.TextInput`
  margin: 20px 0 10px 0;
  border: 2px solid #161616;
  padding: 10px;
  border-radius: 10px;
`;

export const AddTodo = ({ submitHandler }) => {
  const [text, setText] = useState('');

  const changeHandler = value => {
    setText(value);
  };

  return (
    <View>
      <InputField placeholder='new todo...' onChangeText={changeHandler} />

      <Button
        onPress={() => {
          submitHandler(text);
        }}
        title='add todo'
        color='#79B4B7'
      />
    </View>
  );
};
