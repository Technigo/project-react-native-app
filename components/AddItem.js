import React, { useState } from 'react'
import styled from 'styled-components/native'


const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 30px;
`
const InputText = styled.TextInput`
  flex: 1;
  padding: 15px;
  background-color: #fff;
`
const Button = styled.TouchableOpacity`
  padding: 20px 15px;
  background-color: #2c786c;
`
const ButtonText = styled.Text`
  color: #fff;
`




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
    <Container>
      <InputText
        placeholder="New todo"
        onChangeText={changeHandler} />

      <Button onPress={() => { submitHandler(text) }}>
        <ButtonText>Add</ButtonText>
      </Button>
    </Container>
  )
}
