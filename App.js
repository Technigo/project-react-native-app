import React, { useState } from 'react'
import { Header } from './components/Header'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { TodoItem } from './components/TodoItem'
import { AddItem } from './components/AddItem'
// import { globalStyles } from './globalstyles'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#faf5e4',
  },
  content: {
    flex: 1,
    padding: 40,
  }
})


const App = () => {
  const [todos, setTodos] = useState([
    { text: 'create project', key: '1' },
    { text: 'write article', key: '2' },
    { text: 'take a walk', key: '3' }
  ])

  // Add item
  const submitHandler = (text) => {
    setTodos((prevTodos) => {
      return [
        { text: text, key: Math.random().toString() },
        ...prevTodos
      ]
    })
  }

  // Remove items
  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key)
    })
  }

  return (
    <View style={styles.container}>

      <Header />

      <View style={styles.content}>

        <AddItem submitHandler={submitHandler} />

        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <TodoItem
              item={item}
              pressHandler={pressHandler} />
          )} />

      </View>
    </View>
  )
}

export default App
