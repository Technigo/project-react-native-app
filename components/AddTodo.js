import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export function AddTodo({ submitHandler }) {
  const [text, setText] = useState('');

  const changeHandler = value => {
    setText(value);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        value={text}
        placeholder="New todo..."
        onChangeText={changeHandler}
      />
      <Button
        style={styles.button}
        onPress={() => {
          submitHandler(text);
          setText('');
        }}
        title="Add todo"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 25,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },
  button: {
    flex: 1,
    color: 'blue'
  }
});
