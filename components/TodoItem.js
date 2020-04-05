import React, { useState } from 'react'
import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/EvilIcons'

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
        {completed ? <Circle><CheckMark>&#10003;</CheckMark></Circle> : <Circle />}
        <Todo textCompleted={textCompleted}>{text}</Todo>
      </Touchable>

      <TouchableOpacity onPress={() => handleBinPress(item.key)}>
        <Icon name="trash" size={35} color="#fff" />
      </TouchableOpacity>

    </TodoContainer >
  )
}

const TodoContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10px;
  padding-bottom: 0;
`

const Touchable = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`

const Circle = styled.View`
  width: 22px;
  height: 22px;
  margin-right: 13px;
  border-radius: 15px;
  border-width: 1px;
  border-color: #fff;
`

const CheckMark = styled.Text`
  color: #fff;
  font-size: 16px;
  text-align: center;
`

const Todo = styled.Text`
  font-size: 16px;
  font-family: Courier New;
  ${prop => prop.textCompleted ? 'color: #bbb; text-decoration: line-through; text-decoration-color: #bbb' : 'color: #fff'};
`