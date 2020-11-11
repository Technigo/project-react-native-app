import React from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native';


const ToDos = styled.Text`
padding: 16px;
margin-top: 16px;
border: dashed 1px black;
border-radius: 10px;
`

export default function ToDoItem({ item, pressHandler }) {

    return (
        <TouchableOpacity onPress={() => {
            pressHandler(item.key)
        }}
        >
            <ToDos>
                {item.text}</ToDos>
        </TouchableOpacity>
    )
}