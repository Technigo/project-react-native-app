import React from 'react'
import styled from 'styled-components/native'
import { SensorComponent } from './components/SensorComponent'

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`

const App = () => {

  return (
    <Container>
        <SensorComponent></SensorComponent>
    </Container>
  );
};

export default App