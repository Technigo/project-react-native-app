import React, { useState } from 'react'
import styled from 'styled-components/native'


const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`

const Title = styled.Text`
  font-size: 24px;
  color: palevioletred;
  margin-bottom: 20px;
`

const TouchableOpacity = styled.Button`
    background-color: pink;
    font-size: 24px;
    border-radius: 50px;
    padding: 10px; 
`

const App = () => {
  const [dogs, setDogs] = useState();
  
  return (
    <Container>
      <Title>Click the button to get a picture of a cute dog to share with a friend</Title>
      <TouchableOpacity
       title="Cute dogs" 
       onPress=''></TouchableOpacity>
    </Container>
  )
}

export default App
