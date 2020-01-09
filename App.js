import React, { useState } from 'react';
import styled from "styled-components"
import {
  Text,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';

import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/addTodo';

const App = () => {
  const [text, setText] = useState('');

  const [todos, setTodos] = useState([
    { text: 'Buy wine', key: '1' },
    { text: 'Learn JS', key: '2' },
    { text: 'Do some Yoga', key: '3' }
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
          <AddTodo submitHandler={submitHandler} text={text} setText={setText} />
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
paddingTop: 20;
  
`
const List = styled.View`
marginTop: 20;
  
`
export default App
