import React, { useState } from 'react'
import styled from 'styled-components/native'
import { NewTodo } from './NewTodo'
import { TodoList } from './TodoList'

const Container = styled.View`
  flex: 1;
  background-color: #2c3e50;
  justify-content: flex-start;
  align-items: center;
  
`

const Title = styled.Text`
  padding-top: 40px;
  padding-bottom: 20px;
  font-size: 24px;
  color: #fff;
`

const ViewCard = styled.View`
  flex: 1;
  width: 90%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background: #fff;
`

const App = () => {

  return (
    <Container>
      <Title>GET SH#T DONE</Title>
      <ViewCard>
        <NewTodo />
        <TodoList />
      </ViewCard>
    </Container>
  )
}

export default App
