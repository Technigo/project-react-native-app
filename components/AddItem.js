import React, { useState } from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  input: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#2c786c',
  },
  buttonText: {
    color: '#fff',
  }
})




export const AddItem = ({ setTodos }) => {
  const [text, setText] = useState('')

  // Add item
  const submitHandler = (text) => {
    setTodos((prevTodos) => {
      return [
        { text: text, key: Math.random().toString() },
        ...prevTodos
      ]
    })
  }

  const changeHandler = (val) => {
    setText(val)
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="New todo"
        onChangeText={changeHandler}
        style={styles.input} />

      <TouchableOpacity
        onPress={() => { submitHandler(text) }}
        style={styles.button}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
    </View>
  )
}
