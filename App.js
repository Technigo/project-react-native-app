//Photo by The Journal Garden | Vera Bitterer on Unsplash
//Photo by Essentialiving on Unsplash

import React, { useState } from 'react'
import TodoList from "./components/TodoList"
import styled from "styled-components"
import { Button, Share, ScrollView, Image, ImageBackground, Vibration } from "react-native"
import Icon from 'react-native-vector-icons/Feather'

export default function App() {
  const [value, setValue] = useState('') //"value" is the value of TextInput and it is initially passed as an empty string. The "setValue" is responsible for changing the value of "value" on TextInput and then initializing the empty value when the value from the state is assigned as an item to "todos" array. 
  const [todos, setTodos] = useState([]) //"todos" are declared as an empty array that will later contain multiple values. "setTodos" is responsible for updating the state.
  const DURATION = 500

  //function that checks that the TextInput is not empty and the user clicks the plus icon, it will add the value from state to the "todos" and generate a unique key(the date) at the same time to retrieve each todo item record from todos array to display as a list. The initial value for checked is false since no todo item can be marked as completed by default, that is when adding it to the list.The initial value for checked is false since no todo item can be marked as completed by default, that is when adding it to the list.
  addTodo = () => {
    if (value.length > 0) {
      setTodos([...todos, { text: value, key: Date.now(), checked: false }])
      setValue('')
    } else if (value.length <= 0) {
      return Vibration.vibrate(DURATION)
    }
  }

  checkTodo = id => {
    setTodos(
      todos.map(todo => {
        if (todo.key === id) todo.checked = !todo.checked
        return todo
      })
    )
  }

  deleteTodo = id => {
    setTodos(
      todos.filter(todo => {
        if (todo.key !== id)
          return true
        return Vibration.vibrate(DURATION)
      })
    )
  }

  const listOfText = todos.map(todo => {
    return todo.text
  })

  const stringWithTextSeparatedWithLinebreak = listOfText.join("\n")

  onShare = async () => {
    try {
      const result = await Share.share({
        message: stringWithTextSeparatedWithLinebreak.toString()
      })

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <SafeAreaView>
      <ImageBackground
        source={require("./assets/planner.png")}
        style={{ width: "100%", height: 120 }}>
        <HeaderText>TO DO LIST</HeaderText>
      </ImageBackground>
      <TextInputContainer>
        <TextInput
          multiline={true}
          placeholder="What do you want to do?"
          placeholderTextColor="#abbabb"
          value={value}
          onChangeText={value => setValue(value)}
        />
        <ButtonContainer onPress={() => addTodo()}>
          <Icon name="plus-circle"
            size={30} color="black"
            style={{ marginLeft: 15 }} />
        </ButtonContainer>
      </TextInputContainer>
      <ScrollView style={{ marginHorizontal: 20, width: "100%" }}>
        {todos.map(item => (
          <TodoList
            text={item.text}
            key={item.key}
            checked={item.checked}
            setChecked={() => checkTodo(item.key)}
            deleteTodo={() => deleteTodo(item.key)}
          />
        ))}
      </ScrollView>
      <Button onPress={() => onShare()} title="Share List" />
      <ImageContainer>
        <Image
          style={{ width: 500, height: 120 }}
          source={require("./assets/planner.png")} />
      </ImageContainer>
    </SafeAreaView>
  )
}


// STYLED COMPONENTS

const SafeAreaView = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  background-color: #F5FCFF;
`
const HeaderText = styled.Text`
  margin-top: 20px;
  font-size: 30px;
  font-weight: bold;
  color: #e26d5a;
  padding: 30px 15px 25px 15px;
  text-align: center;
`
const TextInputContainer = styled.View`
  flex-direction: row;
  align-items: baseline;
  border-color: black;
  border-bottom-width: 1;
  padding-right: 10px;
  padding-bottom: 10px;
  `
const TextInput = styled.TextInput`
  flex: 1;
  height: 20px;
  font-size: 18px;
  font-weight: bold;
  color: black;
  padding-left: 10px;
  min-height: 3%;
`
const ButtonContainer = styled.TouchableOpacity`
`
const ImageContainer = styled.View`
  background-color: pink;
`
