import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native'

import Icon from 'react-native-vector-icons/Feather'

import TodoList from './Components/TodoList'

export default function App() {
  const [value, setValue] = useState('')
  const [todos, setTodos] = useState([])

  addTodo = () => {
    if (value.length > 0) {
      setTodos([...todos, { text: value, key: Date.now(), checked: false }])
      setValue('')
    }
  }

  checkTodo = id => {
    setTodos(
      todos.map(todo => {
        if (todo.key === id) todo.checked = !todo.checked
        return todo
      })
    )
  }

  deleteTodo = id => {
    setTodos(
      todos.filter(todo => {
        if (todo.key !== id) return true
      })
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Todo List</Text>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          multiline={true}
          placeholder="Feed me Todos"
          placeholderTextColor="grey"
          value={value}
          onChangeText={value => setValue(value)}
        />
        <TouchableOpacity onPress={() => addTodo()}>
          <Icon name="chevrons-down" size={40} color="darkgreen" style={{ marginLeft: 15 }} />
        </TouchableOpacity>
      </View>
      <ScrollView style={{ width: '100%' }}>
        {todos.map(item => (
          <TodoList
            text={item.text}
            key={item.key}
            checked={item.checked}
            setChecked={() => checkTodo(item.key)}
            deleteTodo={() => deleteTodo(item.key)}
          />
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#9c9fa3'
  },
  header: {
    marginTop: '15%',
    fontSize: 30,
    color: '#514e4c',
    fontWeight: "900",
    paddingBottom: 15
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    borderColor: '#514e4c',
    borderBottomWidth: 1,
    paddingRight: 10,
    paddingBottom: 15
  },
  textInput: {
    flex: 1,
    height: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#514e4c',
    paddingLeft: 10,
    minHeight: '3%'
  }
})
