import React, { useState } from 'react'
import styled from 'styled-components/native'
import { StyleSheet, View } from 'react-native'
import Header from './components/Header'
import InputBar from './components/InputBar'

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`

const Title = styled.Text`
  font-size: 24px;
  color: palevioletred;
`

const App = () => {
  const [toDo, setToDo] = useState(false)
  return (
    <Container style={StyleSheet.container}>

      <Header title='ToDoapp' />
      <InputBar />

      <Title>🙈</Title>
    </Container>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },

})

export default App
