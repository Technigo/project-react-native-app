import React, { useState } from 'react';
import { FlatList, Alert, Text } from 'react-native';
import styled from 'styled-components/native';
import Header from './Header';
import ToDoItem from './ToDoItem';
import Add from './Add';

const Habits = (navigation, route) => {
  const [todos, setTodos] = useState([])

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);

    });
  }

  const submitHandler = (text) => {
    {/*This is so you must writ more then three caracters to make an add */ }
    if (text.length > 3) {

      setTodos((prevTodos) => {
        return [
          { text: text, key: Math.random().toString() },
          ...prevTodos
        ];
      });
    } else {
      Alert.alert('Oops!', 'The text must be over 3 characters long', [
        { text: 'Understood', onPress: () => console.log('alert closed') }
      ])
    }
  };

  return (
    <Container>
      <Header />
      <Content>
        <Add submitHandler={submitHandler} />
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
  )
};

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


export default Habits;