import React, { useState } from "react"
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Header from './components/Header'


const App = () => {

  const [count, setCount] = useState(0)

  return (
    <View style={styles.container}>
      <Header title="MY FIRST COUNTER" headerText="an app made in react native" />
      <Text style={styles.counterText}>{count}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.btn} onPress={() => setCount(count - 1)}>
          <Text style={styles.btnText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => setCount(count + 1)}>
          <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  counterText: {
    fontSize: 150,
    color: 'white'
  },
  buttonContainer: {
    flexDirection: 'row'
  },
  btn: {
    backgroundColor: 'white',
    height: 50,
    width: 100,
    borderRadius: 60,
    margin: 20,
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 }
  },
  btnText: {
    fontSize: 30,
    color: 'orange',
    textAlign: 'center',
    alignItems: 'center'
  }
})

export default App