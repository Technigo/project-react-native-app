import React from 'react'
import styled from 'styled-components/native'
import { TouchableOpacity, Text, View, Image } from 'react-native'

import doneImage from "../assets/done-sign.png"

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

const TaskContainer= styled.View`
flex-direction: row
`
const TextContainer= styled.View`
margin-top: 20px;
padding: 10px;
background-color: #e6e6e6
border-width: 1
border-radius: 5px
width: auto
align-items: center
`
const TouchableText = styled.TouchableOpacity`
margin-top: 20px;
padding: 10px;
background-color: #90EE90
border-width: 1
border-radius: 5px
width: 50px
align-items: center
margin-left: 10px
`
const TodoText = styled.Text`
font-size: 20px
font-weight: bold
`
const Checkmark = styled.View`
font-size: 20px
`


