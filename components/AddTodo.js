import React, { useState } from 'react'
import { TextInput, Button, TouchableOpacity, Keyboard, Platform } from 'react-native'
import styled from 'styled-components/native'

const InputWrapper = styled.KeyboardAvoidingView`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const Input = styled.TextInput`
  margin: 20px;
  padding: 15px 15px;
  background-color: #fff;
  border-radius: 60px;
  border-color: #fdbaf8;
  border-width: 3px;
  width: 220px;
`

const AddButton = styled.View`
  margin: 20px;  
  width: 60px;
  height: 60px;
  border-radius: 50px;
  background-color: #fff;
  border-color: #fdbaf8;
  border-width: 3px;
  justify-content: center;
  align-items: center; 
`

const ButtonSign = styled.Text`
  font-weight: bold;
  color: #93329e;
`

const TodoText = styled.Text`
	color: white;
`

export const AddTodo = () => {
	const [todo, setTodo] = useState("")
  const [todoList, setTodoList] = useState([])

  const submitNewTodo = () => {
    Keyboard.dismiss();
		setTodoList([...todoList, todo])

		setTodo(null)  
  }
	console.log(todoList)
  
	return (
		<>
			<InputWrapper
				behavior={Platform.OS === "ios" ? "padding" : "height"}
			>
				<Input 
					type="text"
					placeholder={'Add todo'} 
					value ={todo} 
					onChangeText={(text) => setTodo(text)}>
				</Input>
				<TouchableOpacity onPress={() => submitNewTodo()}>
					<AddButton>
						<ButtonSign>+</ButtonSign>
					</AddButton>
				</TouchableOpacity>
			</InputWrapper>
			<TodoText>
				You added todo "{todoList.slice(-1)}" to your list!
			</TodoText>
		</>
	)
}