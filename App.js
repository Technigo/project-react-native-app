import React from 'react'
import data from './data.json'
import styled from 'styled-components/native'
import { Training } from './components/Training'

const App = () => {
  
  return (
    <Container>
      <Training activitiesArray={data.training}/>
    </Container>
  )
  }

  const Container = styled.View`
  flex: 1;
  backgroundColor: #ffad57;
  justifyContent: center;
  alignItems: center;
`

export default App
