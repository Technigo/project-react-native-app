import React, {useState} from "react"
import {View, Text, StyleSheet, FlatList, Alert} from 'react-native'
import Header from './components/Header'
import ListItem from './components/ListItem'
import AddItem from './components/AddItem'
import { uuid } from 'uuidv4'

const App = () => {
  const [items, setItems] = useState([
  { id: uuid(), text: 'Milk' },
  { id: uuid(), text: 'Bread' },
  { id: uuid(), text: 'Beer' },
  { id: uuid(), text: 'Condoms' }
  ])

const deleteItem = (id) => {
  setItems(prevItems => {
    return prevItems.filter(item => item.id != id)
  })
}

const addItem = (text) => {
  if (!text) {
    Alert.alert('Error', 'Please enter an item', { text:'OK'})
  } else 
  setItems(prevItems => {
    return [{id: uuid(), text}, ...prevItems]
  })
      
}

  return (
    <View style={styles.container}>
      <Header title='Shopping list' />
      <AddItem addItem={addItem} />
      <FlatList data={items}
        renderItem={({ item }) => <ListItem item={item}
        deleteItem = {deleteItem}
        />} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
   
  },

})

export default App
