import React, { useState } from 'react'
import styled from 'styled-components/native'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'

export const AddTodo = ({ submitHandler }) => {
    const [text, setText] = useState('')

    const changeHandler = (value) => {
        setText(value)
    }
    return (
        <InputContainer>
            <Input
                placeholder='Add todo'
                onChangeText={changeHandler}
            />
            <AddButton onPress={() => submitHandler(text)}>
                <ButtonText>+</ButtonText>
            </AddButton>
        </InputContainer>
    )
}

const InputContainer = styled.View`
  flex-direction: row
  justify-content: space-between
  align-items: center
  margin-top: 20px
`

const Input = styled.TextInput`
  width: 120px;
  padding: 7px
  border-width: 1px
  margin-right: 10px
`
const AddButton = styled.TouchableOpacity`
  background-color: #e6e6e6
  padding: 5px;
  border-radius: 50%
  height: 40px
  width: 40px
  align-items: center
  jusitfy-conten: center
  margin-top: 5px
`
const ButtonText = styled.Text`
  font-weight: bold
  font-size: 20px
`