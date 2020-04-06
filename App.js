import React, { useState } from 'react'
import { Header } from './components/Header'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { TodoItem } from './components/TodoItem'
// import { globalStyles } from './globalstyles'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#F4F7FF',
  },
})


const App = () => {
  const [todos, setTodos] = useState([
    { text: 'create project', key: '1' },
    { text: 'write article', key: '2' },
    { text: 'take a walk', key: '3' }
  ])

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key)
    })
  }

  return (
    <View style={styles.container}>

      <Header />

      <View style={styles.content}>
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem
                item={item}
                pressHandler={pressHandler} />
            )} />
        </View>
      </View>
    </View>
  )
}

export default App
