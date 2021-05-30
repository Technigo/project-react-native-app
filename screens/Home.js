import React, { useState, useEffect, Component } from 'react'
import { View, Text, Platform, Button, TouchableOpacity, Keyboard, FlatList } from 'react-native'
import styled from 'styled-components/native'
import SelectMultiple from 'react-native-select-multiple'

import { HamburgerMenu } from '../components/HamburgerMenu'
import { Header } from '../components/Header'
import { AddTodo } from '../components/AddTodo'
//import { RadioButton } from '../components/RadioButton'

// This is the main container for this screen
const HomeContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: red;
`

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

const List = styled.FlatList`
	background-color: green;
`

const HeaderContainer = styled.View`
  width:100%;	
	display: flex;
	margin-bottom: 50px;
	flex-direction: row;
	justify-content: space-around;
	background-color: white;
`

const TodoContainer = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0000FF;
  width: 100%;
`

// const ButtonContainer = styled.View`
//   align-self: flex-start;
//   background-color: green;
//   width: 20%;
// `

// The prop "navigation" is important if you are trying to open/toggle the drawer
//  directly via Javascript
export const Home = ({ navigation }) => {
  const [todo, setTodo] = useState("")
  //const [todoList, setTodoList] = useState([])
	const [todoList, setTodoList] = useState([])
	const [selectedCategories, setSelectedCategories] = useState([])
	const categories = ['Study', 'Fun', 'Home']

	useEffect(() => {
		submitNewTodo
		//onTodoChanged
	}, [todoList])

  const submitNewTodo = () => {
    Keyboard.dismiss();
		console.log(todo)
		console.log(selectedCategories)
		let categoriesArray = selectedCategories.map(category => {
			return category.value
		})
		console.log(categoriesArray)
		setTodoList([...todoList, {todo: todo, category: categoriesArray }])

		setTodo(null)
  }

	// const onTodoChanged = (index, event) => {
	// 	let newTodo = [...todoList]
	// 	newTodo[index] = event.target.value

	// 	setTodoList(newTodo)
	// }

	const onSelectionsChange = (event) => {
		console.log(event)
		setSelectedCategories(event)
	} 

	// const onCategoryChanged = (event) => {
	// 	todoList.category(event.target.value)
	// 	setTodoList([...todoList])
	// }

	console.log(todoList)
	//console.log(category)


	//const list = Object.keys(todoList)
  
	return (
    <HomeContainer>
			<Header />
			<TodoContainer>
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
			<View>
				<SelectMultiple 
					items={categories}
					selectedItems={selectedCategories}
					onSelectionsChange={onSelectionsChange}
				/>
			</View>
			<Text> {todoList.length === 0 ? "You have 0 todo's" : `You added todo "${todoList[todoList.length - 1].todo}" to your list!`}
			</Text>
			{todoList.map((item) => {
				return (
				<Text>{item.todo}</Text>
				)
			})}
			
			{/* <List
				data={todoList}
				renderItem={({ item }) => (
					<TouchableOpacity onPress={() => navigation.navigate('TodoList', {
						todolist: todoList
					})}>
						<Text>{item}</Text>
					</TouchableOpacity>
				)}
			/> */}
			</TodoContainer>
			<Button 
          title="Menu" 
          onPress={() => navigation.openDrawer()}   
        />
    </HomeContainer>
  )
}
