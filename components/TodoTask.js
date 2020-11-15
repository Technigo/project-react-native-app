import React from 'react'
import styled from 'styled-components/native'
import { TouchableOpacity, Text, View, Image } from 'react-native'

export const TodoTask = ({ item, pressHandler }) => {

    return (
        <TaskContainer>
            <TextContainer>
                <TodoText>{item.task}</TodoText>
            </TextContainer>
            <TouchableText onPress={() => pressHandler(item.key)}>
                <Checkmark>&#10004;</Checkmark>
            </TouchableText>
        </TaskContainer>
    )
} 

const TaskContainer = styled.View`
  flex-direction: row
  margin-top: 20px;
`
const TextContainer = styled.View`
  padding: 10px;
  background-color: #e6e6e6
  border-width: 1
  border-radius: 5px
  width: auto
  align-items: center
`
const TouchableText = styled.TouchableOpacity`
  background-color: #f1f1f1	
  border-width: 1
  border-radius: 5px
  width: 50px
  align-items: center
  justify-content: center
  margin-left: 10px 
  opacity: 0.5
`
const TodoText = styled.Text`
  font-size: 20px
  font-weight: bold
`
const Checkmark = styled.View`
  font-size: 25px
  font-weight: bold
`


