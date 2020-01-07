import React, { useState, Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import { Header } from './components/Header';
import { TodoItem } from './components/TodoItem';
import { AddTodo } from './components/AddTodo';

export default function App() {
  const [todos, setTodos] = useState([]);

  const pressHandler = key => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key != key);
    });
  };

  const submitHandler = text => {
    if (!text) return;
    setTodos(prevTodos => {
      return [{ text: text, key: Math.random().toString() }, ...prevTodos];
    });
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            {todos.length > 0 ? (
              <FlatList
                data={todos}
                renderItem={({ item }) => (
                  <TodoItem
                    key={item.key}
                    item={item}
                    pressHandler={pressHandler}
                  />
                )}
              />
            ) : (
              <Text style={styles.notodos}>No todos to display</Text>
            )}
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  content: {
    flex: 1,
    padding: 40
  },
  list: {
    flex: 1,
    marginTop: 20,
    color: 'black'
  },
  notodos: {
    color: '#a9a9a9',
    textAlign: 'center',
    fontWeight: 'bold'
  }
});
