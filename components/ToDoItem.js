import React from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native';


const ToDos = styled.Text`
color:coral;
`
const ToDoBox = styled.View`
border: dashed 1px black;
border-radius: 10px;
padding: 16px;
margin-top: 16px;

`


const ToDoItem = ({ item, pressHandler }) => {

    return (
        <TouchableOpacity onPress={() => {pressHandler(item.key)}}>
            <ToDoBox>
                <ToDos>{item.text}</ToDos>
            </ToDoBox>
        </TouchableOpacity>
    )
}

export default ToDoItem;