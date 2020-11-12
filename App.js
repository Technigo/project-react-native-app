import React from 'react'
import data from './data.json'
import { Alfabet } from './Alfabet.js'
import styled from 'styled-components/native'


const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`
const Title = styled.Text`
  font-size: 154px;
  color: palevioletred;
  align-items: center;
`


const App = () => {

return (
  <Container>
<Title>
    <Alfabet 
    letterArray={data.alfabet}
    />
</Title>
  </Container>
)

}

export default App