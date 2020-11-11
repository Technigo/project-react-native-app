import React, { useState } from 'react'
import { FlatList, Text } from 'react-native'
import styled from 'styled-components/native';
import Header from './components/Header'
import ToDoItem from './components/ToDoItem';

const Container = styled.View`
flex: 1;
background-color: white;
`
const Content = styled.View`
padding: 40px;
`
const List = styled.View`
margin-top: 20px;
`


export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: ' 1 '},
    { text: 'creat app', key: ' 2 '},
    { text: 'code review', key: ' 3 '},

  ])

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);

    });
  }
  return (
    <Container>
      <Header />
      <Content>
      {/* to do form */}
      <List>
    <FlatList 
      data={todos}
      renderItem={({ item }) => (
        <ToDoItem item={item} pressHandler={pressHandler} />
      )}
      />
      </List>
      </Content>
    </Container>
  );
}