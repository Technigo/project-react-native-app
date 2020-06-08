import React, { useState } from 'react'
import styled from 'styled-components/native'
import {FlatList } from 'react-native'
import { Header } from './components/Header'
import { ToDoItems } from './components/ToDoItems'
import { AddToDos } from './components/AddToDos'

const Container = styled.View`
  flex: 1;
  background-color: whitesmoke;
  justify-content: center;
  align-items: center;
`
const Content = styled.View`
  flex: 1;
  background-color: whitesmoke;
  justify-content: center;
  align-items: center;
`
const List = styled.View`
  flex: 1;
  padding: 40px;
  background-color: whitesmoke;
  justify-content: center;
  align-items: center;
`

const App = () => {
  const [todo, setTodo] = useState([
    { text: 'Code', key: '1'},
    {text: 'Go for  a run', key: '2'},
    {text: 'Call mom', key: '3'}
  ]);

  const pressHandler = (key) => {
    setTodo((pastTodo) => {
      return pastTodo.filter (todo => todo.key != key);
    });
  };

  const submitHandler = (text) => {
    setTodo = ((pastTodo) => {
      return [
        { text: text, key: Math.random().toString() },
        ...pastTodo
      ]
    });
  };
  
  return (
    <Container>
      <Header />
      <Content>
        <AddToDos submitHandler={submitHandler} />
        <List>
          <FlatList 
            data= {todo}
            renderItem = {({item}) => (
            <ToDoItems item={item} pressHandler={pressHandler}/>
          )}
          />
        </List>
      </Content>
    </Container>
  );
};

export default App
