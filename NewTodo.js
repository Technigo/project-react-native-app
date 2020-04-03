import React, { useState } from 'react'
import styled from 'styled-components/native'

export const NewTodo = () => {
  const [newTodo, setNewTodo] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
  }

  return (
    <Container>
      <Input
        value={newTodo}
        onChangeText={text => setNewTodo(text)}
        placeholder='Add task 2'
      />
      <Button
        onPress={handleSubmit}
        disabled={newTodo.length < 3 || newTodo.length > 20 ? true : false}
      >
        <ButtonText>ADD</ButtonText>
      </Button>
    </Container>
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
  padding: 20px;
  font-size: 16px;
  `

const Button = styled.TouchableOpacity`
  border: none;
  font-size: 14px;
  padding: 20px;
  text-align: center;
  background: transparent;
`

const ButtonText = styled.Text`
  color: #2c3e50;
  font-weight: 500;
`