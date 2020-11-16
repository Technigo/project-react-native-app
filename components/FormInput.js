import React, { useState } from "react";
import styled from "styled-components/native";
import { Button, Text, TextInput, View } from "react-native";

const FormText = styled.TextInput`
  margin-bottom: 10;
  border-bottom-width: 2;
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
        value={text}
      />
      <Button
        onPress={() => {
          submitHandler(text);
          setText("");
        }}
        title="add todo"
        color="black"
        disabled={text == ""}
      />
    </View>
  );
};

export default FormInput;
