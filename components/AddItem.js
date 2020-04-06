import React, { useState } from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
  input: {
    margin: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
})

export const AddItem = ({ submitHandler }) => {
  const [text, setText] = useState('')

  const changeHandler = (val) => {
    setText(val)
  }

  return (
    <View>
      <TextInput
        placeholder="New todo"
        onChangeText={changeHandler}
        style={styles.input} />

      <TouchableOpacity
        onPress={() => { submitHandler(text) }}>
        <Text>Add</Text>
      </TouchableOpacity>
    </View>
  )
}
