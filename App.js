import React, { useState } from 'react'
import styled from 'styled-components/native'
import { View, Text, FlatList } from 'react-native'

import { Header } from './components/Header'
import { TodoTask } from './components/ToDoTask'

const App = () => {
  const [toDos, setTodos] = useState ([
    {task: 'Work on my project', key: 1},
    {task: 'Workout', key: 2},
    {task: 'Have a coffee', key: 3},
    {task: 'Go for a walk', key: 4}
  ])

  //Deletes a task when pressing it.
  const pressHandler = (key) => {
    setTodos((todo) => {
      return todo.filter(todo => todo.key != key)
    })
  }
  
  return (
    <Wrapper>
       <Header />
      <TodoContainer>
       <TodoList>
        <FlatList
           data={toDos}
           renderItem={({ item }) =>(
              <TodoTask item={item} pressHandler={pressHandler}/>
           )}
        />
       </TodoList>
      </TodoContainer> 
    </Wrapper>
  )
}   

const Wrapper = styled.View`
flex: 1
align-items: center
`
const TodoContainer = styled.View`
padding 40px
`
const TodoList = styled.View`
margin-top: 30px
`



// const UppdateButton = styled.TouchableOpacity`
// margin-top: 10px
// background: blue
// padding: 5px
// border-radius: 5px
// `
// const ButtonText = styled.Text`
// font-weight: bold
// `



export default App