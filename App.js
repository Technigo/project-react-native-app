import React, { useState } from 'react'
import styled from 'styled-components/native'
import { View, Text, FlatList, Alert } from 'react-native'

import { Header } from './components/Header'
import { TodoTask } from './components/ToDoTask'
import { AddTodo } from './components/AddTodo'
import backgroundImage from './assets/background.jpg'

const App = () => {
  const [toDos, setTodos] = useState([
    { task: 'Work on my project', key: 1 },
    { task: 'Workout', key: 2 },
    { task: 'Have a coffee', key: 3 },
    { task: 'Go for a walk', key: 4 }
  ])

  //Deletes a task when pressing it.
  const pressHandler = (key) => {
    setTodos((todo) => {
      return todo.filter(todo => todo.key != key)
    })
  }

  //Update the task with user input
  const submitHandler = (task) => {

    if (task.length > 2) {
      setTodos((todo) => {
        return [
          { task: task, key: Math.random().toString() },
          ...todo
        ]
      })
    } 
  }

  return (
    <Wrapper source={backgroundImage}>
      <Header />
      <AddTodo submitHandler={submitHandler} />
      <TodoContainer >
        <TodoList>
          <FlatList
            data={toDos}
            renderItem={({ item }) => (
              <TodoTask item={item} pressHandler={pressHandler} />
            )}
          />
        </TodoList>
      </TodoContainer>
    </Wrapper>
  )
}

const Wrapper = styled.ImageBackground`
flex: 1
align-items: center

`
const TodoContainer = styled.View`
width: auto
`
const TodoList = styled.View`
margin-top: 30px
`
export default App