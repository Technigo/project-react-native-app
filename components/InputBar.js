import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'


const InputBar = (props) => {
  return (
    <View style={styles.inputContainer}>
    <TextInput 
    style={styles.input} 
    onChangeText={(todoInput) => props.textChange(todoInput)}
    value={props.todoInput}
    />
    <TouchableOpacity style={styles.addButton} onPress={props.addNewTodo} >
      <Text style={styles.addButtonText}>ADD</Text>
    </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create ({
inputContainer: {
  flexDirection: 'row',
  justifyContent: 'space-around',
  shadowOffset: { width: 0, height: 3 },
  shadowColor: '#171717',
  shadowOpacity: .1
},
input: {
backgroundColor: '#effcef',
flex: 1,
fontSize: 18,
height: 35
},
addButton: {
  width: 100,
  backgroundColor: '#94d3ac',
  alignItems: 'center',
  justifyContent: 'center',
},
addButtonText: {
  color: '#171717',
  fontSize: 18,
  fontWeight: '700',
}
})

export default InputBar