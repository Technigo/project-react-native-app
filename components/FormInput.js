import React, { useState } from "react";
import styled from "styled-components/native";
import { Button, Text, TextInput, View } from "react-native";

const FormText = styled.TextInput`
  margin-bottom: 10;
  border-bottom-width: 1;
  border-bottom-color: black;
`;

const FormInput = ({ submitHandler }) => {
  const [text, setText] = useState("");

  const changeHandler = (value) => {
    setText(value);
  };

  return (
    <View>
      <FormText
        placeholder="New todo..."
        onChangeText={(value) => changeHandler(value)}
      />
      <Button
        onPress={() => submitHandler(text)}
        title="add todo"
        color="green"
      />
    </View>
  );
};

export default FormInput;
