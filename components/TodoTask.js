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
`
const TodoText = styled.Text`
font-size: 20px
font-weight: bold
margin-top: 20px
padding: 15px;
background-color: #20B2AA
border-width: 1
border-radius: 5px
`
// const TextField = styled.Text`
// border-width: 1
// color: #777
// padding: 8px
// margin: 10px
// width: 200px
// `