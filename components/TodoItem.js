import React, { useState } from 'react'
import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

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
        <Icon name="trash-o" size={25} color="#2c3e50" />
      </TouchableOpacity>

    </TodoContainer >
  )
}

const TodoContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 13px;
  padding-bottom: 0;
`

const Touchable = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`

const CircleComplete = styled.View`
  width: 25px;
  height: 25px;
  margin-right: 13px;
  border-radius: 15px;
  border-width: 2px;
  border-color: #2c3e50;
  background: #2c3e50;
  color: #fff
`

const CheckMark = styled.Text`
  color: #fff;
  font-size: 16px;
  text-align: center;
`

const CircleNotComplete = styled.View`
  width: 25px;
  height: 25px;
  margin-right: 13px;
  border-radius: 15px;
  border-width: 2px;
  border-color: #2c3e50;
`

const Todo = styled.Text`
  font-size: 16px;
  font-family: Courier New;
  ${prop => prop.textCompleted ? 'color: #bbb; text-decoration: line-through; text-decoration-color: #bbb' : 'color: #2c3e50'};
`