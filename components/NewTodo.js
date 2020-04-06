import React, { useState } from 'react'
import styled from 'styled-components/native'
import { Vibration } from 'react-native' //Used to trigger phone vibration when new thought is added to the list
import Icon from 'react-native-vector-icons/EvilIcons'

const NewTodoContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  border-bottom-width: 1px;
  border-bottom-color: #bbb;
`

const NewTodoInput = styled.TextInput.attrs({
  placeholderTextColor: '#bbb'
})
  `
  padding: 15px 10px;
  color: #fff;
  font-size: 16px;
  font-family: Courier New;
  `

const AddButton = styled.TouchableOpacity`
  padding-right: 10px;
  border: none;
  background: transparent;
  font-size: 14px;
  text-align: center;
`

export const NewTodo = ({ handleSubmit }) => {
  const [newTodo, setNewTodo] = useState('')

  //Function used to update the state of newTodo as the user is typing something in the input field
  const handleChange = value => setNewTodo(value)

  return (
    <NewTodoContainer>

      <NewTodoInput
        value={newTodo}
        onChangeText={handleChange}
        placeholder='Add task'
        maxLength={25}
      />

      <AddButton
        onPress={() => {
          handleSubmit(newTodo)
          Vibration.vibrate()
          setNewTodo('')
        }}
        disabled={newTodo.length < 3 || newTodo.length > 25 ? true : false}
      >
        <Icon name="plus" size={35} color="#fff" />
      </AddButton>

    </NewTodoContainer >
  )
}