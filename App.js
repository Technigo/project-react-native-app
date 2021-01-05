import React from 'react'
import styled from 'styled-components/native'
import data from './data.json'

import { Alfabet } from './components/Alfabet.js'



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