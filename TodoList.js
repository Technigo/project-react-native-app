import React, { useState } from 'react'
import styled from 'styled-components/native'
import { Text, TouchableOpacity, Dimensions } from 'react-native'

export const TodoList = ({ todos }) => {
  const [completed, setCompleted] = useState(false)
  const [textCompleted, setTextCompleted] = useState(false)

  const toggleCompleted = () => {
    if (completed) {
      setCompleted(false)
      setTextCompleted(false)
    } else {
      setCompleted(true)
      setTextCompleted(true)
    }
  }

  return (
    <Container>
      {todos.map((todo) => (
        <TodoContainer>
          <TouchableOpacity onPress={toggleCompleted}>
            {completed ? <CircleComplete><CheckMark>&#10003;</CheckMark></CircleComplete> : <CircleNotComplete />}
          </TouchableOpacity>
          <Todo textCompleted={textCompleted}>{todo}</Todo>
        </TodoContainer>
      ))}

    </Container>
  )
}

const Container = styled.ScrollView`
  color: #000;
`

const TodoContainer = styled.View`
  padding: 20px;
  padding-bottom: 0;
  flex-direction: row;
  align-items: center;
`

const CircleComplete = styled.View`
  width: 25px;
  height: 25px;
  border-radius: 15px;
  border-color: #2c3e50;
  background: #2c3e50;
  border-width: 2px;
  margin-right: 20px;
  color: #fff
`

const CheckMark = styled.Text`
  font-size: 16px;
  text-align: center;
  color: #fff;
`

const CircleNotComplete = styled.View`
  width: 25px;
  height: 25px;
  border-radius: 15px;
  border-color: #2c3e50;
  border-width: 2px;
  margin-right: 20px;
`

const Todo = styled.Text`
  font-size: 16px;
  ${prop => prop.textCompleted ? 'color: #bbb; text-decoration: line-through; text-decoration-color: #bbb' : 'color: #2c3e50'};
`