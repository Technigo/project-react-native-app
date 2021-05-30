import React, { useState, useEffect } from 'react'
import { Platform, Button, TouchableOpacity, Keyboard } from 'react-native'
import styled from 'styled-components/native'
import SelectMultiple from 'react-native-select-multiple'

import { Header } from '../components/Header'

// This is the main container for this screen
const HomeContainer = styled.View`
	flex: 1;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #0000FF;
`

const TodoContainer = styled.View`
	flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const InputWrapper = styled.KeyboardAvoidingView`
	flex-direction: row;
  justify-content: center;
  align-items: center;
`

const Input = styled.TextInput`
  margin: 10px;
  padding: 15px 15px;
  background-color: #fff;
  border-radius: 60px;
  border-color: #fdbaf8;
  border-width: 3px;
  width: 220px;
`

const GoButton = styled.View`
  margin: 20px; 
  width: 100px;
  height: 40px;
  border-radius: 10px;
  background-color: #2196F3;
  border-color: #fdbaf8;
  justify-content: center;
  align-items: center; 
`
const GoButtonText = styled.Text`
	font-weight: bold;	  
	color: #fff;
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

const ButtonText = styled.Text`
  font-weight: bold;
  color: #93329e;
`

const SelectWrapper = styled.View`
	margin-left: 10%;
	display: flex;
	flex-direction: column;
	width: 100%;
	align-items: flex-start;
`

const StyledText = styled.Text`
	margin: 10px;
	width: 80%;
	text-align: center;
	font-size: 20px;
	font-weight: bold;
	color: #fff;
	text-shadow: 1px 1px 2px #fdbaf8;
`
const StyledTitle = styled.Text`
	margin: 10px 50px;
	font-size: 15px;
	font-weight: bold;
	color: #fff;
	text-shadow: 1px 1px 2px #fdbaf8;
`

export const Home = ({ navigation }) => {
  const [text, setText] = useState("")
	const [todoList, setTodoList] = useState([])
	const [selectedCategories, setSelectedCategories] = useState([])
	
	const categories = ['Study', 'Fun', 'Home']

	useEffect(() => {
		submitNewTodo
	}, [todoList])

  const submitNewTodo = () => {
    Keyboard.dismiss();
		let categoriesArray = selectedCategories.map(category => {
			return category.value
		})
		
		setTodoList([...todoList, {todo: text, category: categoriesArray }])
		setText(null)
  }

	const onSelectionsChange = (event) => {
		setSelectedCategories(event)
	} 

	return (
		<>
			<HomeContainer>
				<Header />
				<TodoContainer>
					<StyledText>{
						todoList.length === 0 ? "You currently have 0 todo's" 
						: `You added todo "${todoList[todoList.length - 1].todo}" to your list!`
					}
					</StyledText>
					<InputWrapper behavior={
						Platform.OS === "ios" ? "padding" 
						: "height"
					}>
						<Input 
							type="text"
							placeholder={'Add todo'} 
							value ={text} 
							onChangeText={(item) => setText(item)}>
						</Input>
						<TouchableOpacity onPress={() => submitNewTodo()}>
							<AddButton>
								<ButtonText>+</ButtonText>
							</AddButton>
						</TouchableOpacity>
					</InputWrapper>
					<SelectWrapper>
						<StyledTitle>Categories</StyledTitle>
						<SelectMultiple 
							items={categories}
							selectedItems={selectedCategories}
							onSelectionsChange={onSelectionsChange}
						/>
					</SelectWrapper>	
				</TodoContainer>
				<TouchableOpacity 
					title="SEE MY LIST" 
					onPress={() => navigation.navigate('TodoList', { todoList: todoList})}>
					<GoButton>
						<GoButtonText>SEE MY LIST</GoButtonText>
					</GoButton>
				</TouchableOpacity>
				<Button 
						title="Menu" 
						onPress={() => navigation.openDrawer()}   
					/>
			</HomeContainer>
		</>
  )
}
