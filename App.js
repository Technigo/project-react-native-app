import React from 'react';
import styled from 'styled-components/native';
import { SensorComponent } from './components/SensorComponent';
import { Header } from './components/Header'
import { Footer } from './components/Footer'

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 24px;
  color: palevioletred;
`;

const App = () => {
  return (
    <>
    <Header> </Header>
    <Container>
      <SensorComponent></SensorComponent>
    </Container>
    <Footer></Footer>
   </>
  );
};

export default App;
