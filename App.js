import React, { useState } from 'react'
import styled from 'styled-components/native'
import { NewTodo } from './components/NewTodo'
import { StatusBar, FlatList } from 'react-native'
import { TodoItem } from './components/TodoItem'

const App = () => {
  const [todos, setTodos] = useState([])

  const handleSubmit = (text) => {
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        { text: text, key: Math.random().toString() }

      ];
    })
  }

  const handleBinPress = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key !== key)
    })
  }

  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <Title>GET SH#T DONE</Title>

      <ViewCard>
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
      </ViewCard>

    </Container>
  )
}

export default App

const Container = styled.View`
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

const ViewCard = styled.View`
  flex: 1;
  width: 90%;
`