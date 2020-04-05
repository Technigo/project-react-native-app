import React, { useState } from 'react'
import styled from 'styled-components/native'
import { NewTodo } from './components/NewTodo'
import { FlatList } from 'react-native'
import { TodoItem } from './components/TodoItem'

const App = () => {
  const [todos, setTodos] = useState([])

  const handleSubmit = (text) => {
    setTodos((prevTodos) => {
      return [
        { text: text, key: Math.random().toString() },
        ...prevTodos
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
  padding-top: 40px;
  padding-bottom: 20px;
  color: #fff;
  font-size: 24px;
`

const ViewCard = styled.View`
  flex: 1;
  width: 90%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background: #fff;
`