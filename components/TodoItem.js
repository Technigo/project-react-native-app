import React, { useState } from 'react'
import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/EvilIcons'

const TodoItemContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10px;
  padding-bottom: 0;
`

const TouchableTodoItem = styled.TouchableOpacity`
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

const TodoText = styled.Text`
  font-size: 16px;
  font-family: Courier New;
  ${prop => prop.completed ? 'color: #bbb; text-decoration: line-through; text-decoration-color: #bbb' : 'color: #fff'};
`

export const TodoItem = ({ text, item, handleBinPress }) => {
  const [completed, setCompleted] = useState(false)

  //Function used to toggle if a todo item is completed or not, used to render different styling
  const toggleCompleted = () => {
    { completed ? setCompleted(false) : setCompleted(true) }
  }

  return (
    <TodoItemContainer>

      <TouchableTodoItem onPress={toggleCompleted}>
        {completed ? <Circle><CheckMark>&#10003;</CheckMark></Circle> : <Circle />}
        <TodoText completed={completed}>{text}</TodoText>
      </TouchableTodoItem>

      <TouchableOpacity onPress={() => handleBinPress(item.key)}>
        <Icon name="trash" size={35} color="#fff" />
      </TouchableOpacity>

    </TodoItemContainer >
  )
}