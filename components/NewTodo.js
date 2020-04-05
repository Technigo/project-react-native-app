import React, { useState } from 'react'
import styled from 'styled-components/native'
import { Vibration } from 'react-native'

export const NewTodo = ({ handleSubmit }) => {
  const [newTodo, setNewTodo] = useState('')
  const handleChange = value => setNewTodo(value)

  return (
    <Container>

      <Input
        value={newTodo}
        onChangeText={handleChange}
        placeholder='Add task'
        maxLength={25}
      />

      <Button
        onPress={() => {
          handleSubmit(newTodo)
          Vibration.vibrate()
          setNewTodo('')
        }}
        disabled={newTodo.length < 3 || newTodo.length > 25 ? true : false}
      >
        <ButtonText>ADD</ButtonText>
      </Button>

    </Container >
  )
}

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  border-bottom-width: 1px;
  border-bottom-color: #bbb;
`

const Input = styled.TextInput`
  padding: 15px 13px;
  color: #2c3e50;
  font-size: 16px;
  font-family: Courier New;
  `

const Button = styled.TouchableOpacity`
  padding: 15px 13px;
  border: none;
  background: transparent;
  font-size: 14px;
  text-align: center;
`

const ButtonText = styled.Text`
  color: #2c3e50;
  font-weight: 500;
`