import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'

const InputBar = (props) => {
  

  return (
    <View style={styles.inputContainer}> 
      <TextInput style={styles.input}/>
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>ADD</Text>
        </TouchableOpacity>
  </View>
  )
}

const styles = StyleSheet.create({
  inputContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowOffset: {width:0, height: 3,},
    shadowColor: 'black',
    shadowOpacity: 0.1
  },
  input:{
    backgroundColor: '#fff',
    flex: 1,
    fontSize: 18,
    height: 35
  },
  addButton:{
    
  }
})
export default InputBar