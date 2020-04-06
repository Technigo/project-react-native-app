import React, { useState } from 'react'
import styled from 'styled-components/native'

import { Header } from './components/Header'
import { StatusBar, FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { TodoItem } from './components/TodoItem'
import { AddItem } from './components/AddItem'


const Wrapper = styled.View`
  flex: 1;
  justify-content: space-between;
  background-color: #F7EFD4;
`
const Container = styled.View`
  flex: 1;
  padding: 40px;
`


const App = () => {
  const [todos, setTodos] = useState([
    { text: 'Take a walk', key: '1' },
    { text: 'Bake bread', key: '2' },
    { text: 'Write article', key: '3' }
  ])


  // Remove items
  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key)
    })
  }

  return (
    <TouchableWithoutFeedback onPress={() => { // Dismiss keyboard when clicked
      Keyboard.dismiss()
    }}>

      <Wrapper>

        <StatusBar barStyle="light-content" hidden={false} />

        <Header />

        <Container>

          <AddItem setTodos={setTodos} />

          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem
                item={item}
                pressHandler={pressHandler} />
            )} />

        </Container>
      </Wrapper>
    </TouchableWithoutFeedback>
  )
}

export default App
