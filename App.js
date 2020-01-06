import React, { useState } from 'react'
import { TouchableOpacity, ScrollView } from 'react-native'
import styled from "styled-components"

import Icon from 'react-native-vector-icons/Feather'

import TodoList from './Components/TodoList'



export default function App() {
  const [value, setValue] = useState('')
  const [todos, setTodos] = useState([])

  addTodo = () => {
    if (value.length > 0) {
      setTodos([...todos, { text: value, key: Date.now(), checked: false }])
      setValue('')
    }
  }

  checkTodo = id => {
    setTodos(
      todos.map(todo => {
        if (todo.key === id) todo.checked = !todo.checked
        return todo
      })
    )
  }

  deleteTodo = id => {
    setTodos(
      todos.filter(todo => {
        if (todo.key !== id) return true
      })
    )
  }

  return (
    <Container>
      <Title>Todo List</Title>

      <TextInputContainer>
        <TextInput
          multiline={true}
          placeholder="Feed me Todos"
          placeholderTextColor="grey"
          value={value}
          onChangeText={value => setValue(value)}
        />
        <TouchableOpacity onPress={() => addTodo()}>
          <Icon name="chevrons-down" size={40} color="darkgreen" style={{ marginLeft: 15 }} />
        </TouchableOpacity>
      </TextInputContainer>

      <ScrollView style={{ width: '100%' }}>
        {todos.map(item => (
          <TodoList
            text={item.text}
            key={item.key}
            checked={item.checked}
            setChecked={() => checkTodo(item.key)}
            deleteTodo={() => deleteTodo(item.key)}
          />
        ))}
      </ScrollView>
    </Container>
  )
}


const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  background-color: #9c9fa3;
  `
const Title = styled.Text`
  margin-top: 15%;
  font-size: 30;
  color: #514e4c;
  font-weight: 900;
  padding-bottom: 15;
`
const TextInputContainer = styled.View`
  flex-direction: row;
  align-items: baseline;
  border-color: #514e4c;
  border-bottomWidth: 1;
  padding-right: 10;
  padding-bottom: 15;
`
const TextInput = styled.TextInput`
  flex: 1;
  height: 20;
  font-size: 18;
  font-weight: bold;
  color: #514e4c;
  padding-left: 10;
  min-height: 3%;
`