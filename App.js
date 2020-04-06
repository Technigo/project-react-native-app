import React, { useState } from 'react'
import { Header } from './components/Header'
import { StyleSheet, StatusBar, Text, View, FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { TodoItem } from './components/TodoItem'
import { AddItem } from './components/AddItem'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#F7EFD4',
  },
  content: {
    flex: 1,
    padding: 40,
  }
})


const App = () => {
  const [todos, setTodos] = useState([
    { text: 'Yoga', key: '1' },
    { text: 'Bake a bread', key: '2' },
    { text: 'Write article', key: '3' }
  ])


  // Remove items
  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key)
    })
  }

  return (
    <TouchableWithoutFeedback onPress={() => { // Dismiss keyboard when clicked
      Keyboard.dismiss()
    }}>

      <View style={styles.container}>

        <StatusBar barStyle="light-content" hidden={false} />

        <Header />

        <View style={styles.content}>

          <AddItem setTodos={setTodos} />

          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem
                item={item}
                pressHandler={pressHandler} />
            )} />

        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default App
