import React from 'react'
import styled from 'styled-components/native'
import { View, Text, TextInput } from 'react-native'

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

const InputField = styled.TextInput`
  padding: 20px;
  border-bottom-width: 1px;
  border-bottom-color: #bbb;
  font-size: 16px;
  `

const App = () => {
  return (
    <Container>
      <Title>GET SH#T DONE</Title>
      <ViewCard>
        <InputField placeholder="Add task" />
      </ViewCard>
    </Container>
  )
}

export default App
