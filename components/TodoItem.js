import React, { useState } from 'react'
import styled from 'styled-components/native'
import { Text, TouchableOpacity, Dimensions, Button } from 'react-native'

export const TodoItem = ({ text, item, handleBinPress }) => {
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
    <TodoContainer>
      <Touchable onPress={toggleCompleted}>
        {completed ? <CircleComplete><CheckMark>&#10003;</CheckMark></CircleComplete> : <CircleNotComplete />}
        <Todo textCompleted={textCompleted}>{text}</Todo>
      </Touchable>
      <TouchableOpacity onPress={() => handleBinPress(item.key)}>
        <Text>Bin</Text>
      </TouchableOpacity>
    </TodoContainer >
  )
}

const TodoContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  padding-bottom: 0;
`

const Touchable = styled.TouchableOpacity`
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