import React, { useState } from 'react'
import styled from 'styled-components/native'
import { NewTodo } from './components/NewTodo'
import { StatusBar, FlatList } from 'react-native'
import { TodoItem } from './components/TodoItem'

const OuterContainer = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  background-color: #2c3e50;
`

const Title = styled.Text`
  padding-top: 50px;
  padding-bottom: 20px;
  color: #fff;
  font-size: 24px;
  font-weight: 200;
`

const TodoContainer = styled.View`
  flex: 1;
  width: 90%;
`

const App = () => {
  const [todos, setTodos] = useState([])

  //Function adding a new todo to the bottom of previous todos
  const handleSubmit = (text) => {
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        { text: text, key: Math.random().toString() }

      ];
    })
  }

  //Function filtering out the todo item you wish to remove and returning a new array without it
  const handleBinPress = key => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key !== key)
    })
  }

  return (
    <OuterContainer>

      <StatusBar barStyle="light-content" />
      <Title>GET SH#T DONE</Title>

      <TodoContainer>
        <NewTodo handleSubmit={handleSubmit} />
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <TodoItem
              text={item.text}
              item={item}
              handleBinPress={handleBinPress}
            />
          )}
        />
      </TodoContainer>

    </OuterContainer>
  )
}

export default App