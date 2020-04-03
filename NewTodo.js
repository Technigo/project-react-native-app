import React, { useState } from 'react'
import styled from 'styled-components/native'

export const NewTodo = () => {
  const [newTodo, setNewTodo] = useState('')

  return (
    <Input
      value={newTodo}
      onChangeText={text => setNewTodo(text)}
      placeholder='Add task 2'
    />
  )
}

const Input = styled.TextInput`
  padding: 20px;
  border-bottom-width: 1px;
  border-bottom-color: #bbb;
  font-size: 16px;
  `