import React, { useState } from "react"
import { FlatList, Alert } from "react-native"
import styled from "styled-components/native"
import Header from "./components/Header"
import AddTodos from "./components/AddTodos"
import TodosItem from "./components/TodosItem"

const App = () => {
  const [todos, setTodos] = useState([

    { id: '1', name: 'Learn about react-native', key: '1' },
    { id: '2', name: 'Check the videos', key: '2' },
    { id: '3', name: 'Get inspired', key: '3' },
    { id: '4', name: 'Create a todo app', key: '4' },
  ])
  const pressHandler = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.id != id)
    })
  }

  const submitHandler = (name) => {
    if (name.length > 3) {
      setTodos((prevTodos) => {
        return ([
          { id: Date.now(), name: name },
          ...prevTodos
        ])
      })
    } else {
      // Alert.alert('Ops!', 'todos must be over 3 characters long', [
      //   { text: 'OK', onPress: () => console.log('alert closed') }
      // ])
    }
  }

  return (
    <Container>
      <Header />
      <AddTodosWrapp>
        <AddTodos submitHandler={submitHandler} />
      </AddTodosWrapp>
      <FlatListWrapper>
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <TodosItem item={item} pressHandler={pressHandler} key={item.id} />
          )} />
      </FlatListWrapper>
    </Container>
  )
}

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  padding: 8px;
  padding-top:30px;
`

const AddTodosWrapp = styled.View`
  flex:1;
  max-height: 150px;
`
const FlatListWrapper = styled.View`
  flex:1;
 justify-content:flex-start;
`



export default App
