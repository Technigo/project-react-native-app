import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity
} from 'react-native';

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
        placeholder="Enter new todo..."
        onChangeText={changeHandler}
      />
      <TouchableOpacity
        onPress={() => {
          submitHandler(text);
          setText('');
        }}
      >
        <View style={styles.button}>
          <Text style={styles.buttonText}>Add todo</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 25,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    placeholderTextColor: 'black'
  },
  button: {
    marginTop: 15,
    marginBottom: 10,
    padding: 10,
    alignItems: 'center',
    borderRadius: 7,
    backgroundColor: '#e6194B'
  },
  buttonText: {
    textAlign: 'center',
    padding: 10,
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: 'bold'
  }
});
