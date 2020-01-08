import React, { useState } from 'react';
import styled from "styled-components/native"
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Header } from './components/Header';
import { TodoItem } from './components/TodoItem';

import AddTodo from './components/addTodo';

const App = () => {

  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' }
  ]);

  const pressHandler = (key) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key != key);
    });
  };

  const submitHandler = (text) => {
    if (text.length > 5) {
      setText('');
      setTodos(prevTodos => {
        return [
          { text, key: Math.random().toString() },
          ...prevTodos
        ];
      });
    } else {
      Alert.alert('OOPS', 'New todo is to short, try again', [
        { text: 'Understood', onPress: () => console.log('closed') }
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container>
        <Header />
        <Content>
          <AddTodo />
          <List>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </List>
        </Content>
      </Container>
    </TouchableWithoutFeedback>
  )
}


const Container = styled.View`
  flex: 1;
  
`
const Content = styled.View`
padding: 20;
  
`
const List = styled.View`
margin-top: 20;
  
`
export default App
