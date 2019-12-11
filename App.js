import React, { useState } from "react"
import { StyleSheet, Text, Button, View } from 'react-native'
import Header from './components/Header'


const App = () => {

  const [count, setCount] = useState(0)

  return (
    <View style={styles.container}>
      <Header title="Worlds greatest counter" />
      <Text style={styles.counterText}>{count}</Text>
      <Button title='+' onPress={() => setCount(count + 1)} />
      <Button title='-' onPress={() => setCount(count - 1)} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  counterText: {
    fontSize: 100,
    color: 'white'
  }
})

export default App