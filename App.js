import React from 'react'
import data from './data.json'

import { Alfabet } from './components/Alfabet.js'
import styled from 'styled-components/native'


const Container = styled.ImageBackground`
  flex: 1;
  background-color: #411271;
  justifyContent: center;
  alignItems: center;
`;



const App = () => {

return (
  <Container>
    <Alfabet 
    letterArray={data.alfabet}
    />
  </Container>
)
}

export default App