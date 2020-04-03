import React from 'react'
import styled from 'styled-components/native'

export const TodoList = () => {
  return (
    <Container>
      <Todo>GET SH#T DONE 2</Todo>
    </Container>
  )
}

const Container = styled.ScrollView`
  color: #000;
`

const Todo = styled.Text`
  padding: 20px;
  font-size: 16px;
  color: #000;
`