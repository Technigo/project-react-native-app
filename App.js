import React from 'react'
import styled from 'styled-components/native'

import data from './data.json'
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
  background-color: #ffad57;
  justify-content: center;
  align-items: center;
`

export default App
