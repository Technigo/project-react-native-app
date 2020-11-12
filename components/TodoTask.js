import React from 'react'
import styled from 'styled-components/native'
import { TouchableOpacity, Text } from 'react-native'

export const TodoTask = ({ item, pressHandler }) => {

    return(
        <TouchableText onPress={() => pressHandler(item.key)}>
           <TodoText>{item.task}</TodoText>
        </TouchableText>
    )
}

const TouchableText = styled.TouchableOpacity`
margin-top: 20px;
padding: 10px;
background-color: #20B2AA
border-width: 1
border-radius: 5px
width: auto
`
const TodoText = styled.Text`
font-size: 20px
font-weight: bold

`
