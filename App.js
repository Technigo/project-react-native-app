import React, { useState } from 'react'
import styled from 'styled-components/native'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'

import { Header } from './components/Header'

const App = () => {
  const [toDos, setTodos] = useState ([
    {task: 'Work on my project', key: 1},
    {task: 'Workout', key: 2},
    {task: 'Have a coffee', key: 3},
    {task: 'Go for a walk', key: 4}
  ])
  
  return (
    <Wrapper>
       <Header />
      <TodoContainer>
       <TodoList>
        <FlatList
           data={toDos}
           renderItem={({ item }) =>(
             <TodoText>{item.task}</TodoText>
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
const TodoText = styled.Text`
font-size: 20px
font-weight: bold
`





// const Touchable = styled.TouchableOpacity`
// `
// const TextField = styled.Text`
// border-width: 1
// color: #777
// padding: 8px
// margin: 10px
// width: 200px
// `
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